function filterPassing(scores, isPassing) {
    let result = [];
    
    for (let i = 0; i < scores.length; i++) {
        // If the callback evaluates to true for the current score, include it
        if (isPassing(scores[i])) {
            result.push(scores[i]);
        }
    }
    
    return result;
}

const scores = [95, 40, 76, 88, 55];

function isPassing(score) {
    return score >= 60;
}

const passed = filterPassing(scores, isPassing);
console.log(passed); // Output: [95, 76, 88]