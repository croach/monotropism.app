import { shuffle } from '$lib/utils.js'
import questions from '$lib/data/questions.json'

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
        const data = await event.request.formData();
        const numQuestions = 47;

        let sum = 0
        for (let i = 1; i <= numQuestions; i++) {
            const value = data.get(`answer[${i}]`);
            sum += value ? parseInt(value) : 0
        }

        return {
            monotropismScore: `${sum}/${numQuestions * 5}`,
            avgScore: sum / numQuestions,
            autisticStats: {
                mu: 4.15,
                sd: .347
            },
            nonAutisticStats: {
                mu: 3.19,
                sd: .578
            }
        }
    }
};