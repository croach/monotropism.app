import { pb } from '$lib/pocketbase.js'
import { calcMonotropismScore, getQuestionnaireStats } from '$lib/stats.js'

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
    const submissionId = params.submission_id;
    const submission = (await pb.collection('submissions').getOne(submissionId)).submission;
    const { monotropismScore, maxMonotropismScore, avgMonotropismScore } = calcMonotropismScore(submission);
    const stats = getQuestionnaireStats();
    return {
        ...stats,
        monotropismScore: `${monotropismScore}/${maxMonotropismScore}`,
        avgScore: avgMonotropismScore.toFixed(2),
        id: submissionId
    }
}