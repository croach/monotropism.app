import { shuffle } from '$lib/utils.js'
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
        const questions = Array.from(formData.entries())
        const data = {
            submission: JSON.stringify(questions.reduce( (obj, [num, val]) => (obj[num.slice(7, -1)] = parseInt(val), obj), {}))
        }
        const submission = await pb.collection('submissions').create(data)

        throw redirect(302, `${submission.id}`)
    }
};