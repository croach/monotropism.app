import { pb } from '$lib/pocketbase.js'

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
    const submissionId = params.submission_id;
    const submission = (await pb.collection('submissions').getOne(submissionId)).submission;
    const answers = Object.values(submission)
    const numAnswered = answers.length;
    const monotropismScore = answers.reduce((sum, ans) => sum + ans, 0)
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