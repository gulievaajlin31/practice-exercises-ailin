function average(...nums) {
    // Guard clause: return null if no arguments are passed
    if (nums.length === 0) {
        return null;
    }
    
    const sum = nums.reduce((acc, curr) => acc + curr, 0);
    return sum / nums.length;
}

console.log(average(10, 20, 30)); // Output: 20
console.log(average());           // Output: null