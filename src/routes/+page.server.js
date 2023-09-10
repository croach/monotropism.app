import { shuffle } from '$lib/utils.js'
import { calcMonotropismScore, getQuestionnaireStats } from '$lib/stats.js'
import questions from '$lib/data/questions.json'
import { pb } from '$lib/pocketbase.js'
import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
    shuffle(questions)
    return {
        questions: questions
    };
}

/** @type {import('./$types').Actions} */
export const actions = {
    default: async (event) => {
        const formData = await event.request.formData()
        console.log(formData)
        
        // Get whether or not the user chose to save the data, then remove the save-data field from the form data so we
        // don't include it when calculating the score
        const saveData = formData.has('save-data') ? formData.get('save-data') === "true" : false
        formData.delete('save-data')

        // Pull the answers out of the form data and format the data into an object with the question number as the key 
        // and the answer as the value (e.g., { "1": 5, "2": 4, ... }})
        const questions = Array.from(formData.entries())
        const submission = questions.reduce( 
                (obj, [num, val]) => (obj[num.slice(7, -1)] = parseInt(val), obj), 
                {}
            )
            
        // If the user chose to save the data, create a new submission and redirect to them to the results page
        if (saveData) {
            // Stringify the submission so we can store it in the database
            const data = { submission: JSON.stringify(submission) }
            const record = await pb.collection('submissions').create(data)
            throw redirect(302, `${record.id}`)
        } 
        
        // Otherwise, just return the data
        const { monotropismScore, maxMonotropismScore, avgMonotropismScore } = calcMonotropismScore(submission);
        const stats = getQuestionnaireStats();
        return {
            ...stats,
            monotropismScore: `${monotropismScore}/${maxMonotropismScore}`,
            avgScore: avgMonotropismScore.toFixed(2)
        }
    }
};