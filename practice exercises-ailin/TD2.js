function applyToArray(arr, fn) {
    let result = [];
    
    for (let i = 0; i < arr.length; i++) {
        // Apply the callback function 'fn' to each element and push to the new array
        result.push(fn(arr[i]));
    }
    
    return result;
}

const numbers = [1, 2, 3];

function double(x) {
    return x * 2;
}

const result = applyToArray(numbers, double);
console.log(result); // Output: [2, 4, 6]