export function shuffle(arr) {
    for (let i = 0; i < arr.length; i++) {
        const j = Math.floor(Math.random() * i);
        [arr[j], arr[i]] = [arr[i], arr[j]];
    }
}

export function arange(start, end, step) {
    let arr = [];
    let curr = start;
    while (curr <= end) {
        arr.push(curr);
        curr += step;
    }
    return arr;
}

export function gaussianPdf(x, mu, sd) {
    const a = 1 / (sd * Math.sqrt(2 * Math.PI));
    const b = Math.exp(-0.5 * ((x - mu)/sd)**2);
    return a * b;
}

export function gaussianCurve(mu, sd) {
    let x = arange(mu - sd * 3, mu + sd * 3, 0.001);
    let y = x.map((x) => gaussianPdf(x, mu, sd));
    return x.map((e, i) => [e, y[i]]);
}
