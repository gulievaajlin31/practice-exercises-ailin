function makeMultiplier(n) {
    // The inner function "remembers" 'n' via closure scope.
    // Even after makeMultiplier(n) has finished executing, 
    // the returned function retains access to n from its lexical environment.
    return function(x) {
        return x * n;
    };
}

// Modern Arrow Function Alternative:
// const makeMultiplier = n => x => x * n;

const double = makeMultiplier(2);
const triple = makeMultiplier(3);

console.log(double(5));  // Output: 10
console.log(triple(5));  // Output: 15