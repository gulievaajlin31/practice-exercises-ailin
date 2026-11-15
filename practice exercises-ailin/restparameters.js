function sum(...nums) {
    return nums.reduce((accumulator, current) => accumulator + current, 0);
}

function average(...nums) {
    if (nums.length === 0) {
        return NaN;
    }
    
    // Reuse the sum function by spreading nums, then divide by the count
    return sum(...nums) / nums.length;
}

console.log("Sum (1, 2, 3):", sum(1, 2, 3));                         // Output: 6
console.log("Average (10, 20, 30, 40):", average(10, 20, 30, 40));     // Output: 25

// Edge case test:
console.log("Average with no arguments:", average());                  // Output: NaN