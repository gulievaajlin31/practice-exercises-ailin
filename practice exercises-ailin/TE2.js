// 1. Pure function: handles calculation only
function double(x) {
    return x * 2;
}

// 2. Function with side effect: handles logging and delegates calculation
function logDouble(x) {
    console.log("Input is:", x);
    const result = double(x);
    console.log("Output is:", result);
    return result;
}

console.log("--- Pure calculation ---");
console.log(double(5));       // Output: 10

console.log("\n--- Logging wrapper ---");
logDouble(5);                 
// Output:
// Input is: 5
// Output is: 10