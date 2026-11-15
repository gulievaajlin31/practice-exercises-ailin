function sumAll(...nums) {
    return nums.reduce((acc, curr) => acc + curr, 0);
}

console.log(sumAll(1, 2));            // Output: 3
console.log(sumAll(1, 2, 3, 4, 5));   // Output: 15
console.log(sumAll());                // Output: 0