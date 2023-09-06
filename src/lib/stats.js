// This file contains several functions that are used to calculate statistics

/**
 * Returns the monotropism score given a user's submission
 * @param {Object.<string, number>} submission - The user's submission
 * @returns {Object.<string, number>} - An object containing:
 *   the monotropism score, 
 *   the maximum possible monotropism score given the number of questions they answered, and 
 *   the average monotropism score.
 */
export function calcMonotropismScore(submission) {
    const answers = Object.values(submission);
    const numAnswered = answers.length;
    const monotropismScore = answers.reduce((sum, ans) => sum + ans, 0);
    const maxMonotropismScore = numAnswered * 5;
    const avgMonotropismScore = monotropismScore / numAnswered;
    return {
        monotropismScore: monotropismScore,
        maxMonotropismScore: maxMonotropismScore,
        avgMonotropismScore: avgMonotropismScore
    }
}

/**
 * Returns score distribution statistics for allistic and autistic people
 * @returns {Object.<string, Object.<string, number>>} - An object containing:
 *   the average monotropism score for autistic people,
 *   the standard deviation of the monotropism score for autistic people,
 *   the average monotropism score for allistic people, and
 *   the standard deviation of the monotropism score for allistic people.
 */
export function getQuestionnaireStats() {
    return {
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