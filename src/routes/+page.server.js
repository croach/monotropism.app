import { shuffle } from '$lib/utils.js'
import questions from '$lib/data/questions.json'
import { pb } from '$lib/pocketbase.js'

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
        const questions = Array.from((await event.request.formData()).entries());
        const numAnswered = questions.length;
        const monotropismScore = questions.reduce((sum, q) => sum + parseInt(q[1]), 0)
        const maxMonotropismScore = numAnswered * 5;
        const avgMonotropismScore = monotropismScore / numAnswered;

        return {
            monotropismScore: `${monotropismScore}/${maxMonotropismScore}`,
            avgScore: avgMonotropismScore.toFixed(2),
            autisticStats: {
                mu: 4.15,
                sd: .347
            },
            allisticStats: {
                mu: 3.19,
                sd: .578
            }
        }
    }
};