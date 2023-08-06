export function shuffle(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        const j = Math.floor(Math.random() * i);
        [arr[j], arr[i]] = [arr[i], arr[j]];
    }
}