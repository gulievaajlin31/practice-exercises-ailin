function createCounter() {
    let count = 0; // Private variable scoped to this specific counter instance
    
    return function() {
        count++; // Increment the count
        console.log(count); // Log the current count
        return count;
    };
}

const counterA = createCounter();
counterA(); // Output: 1
counterA(); // Output: 2

const counterB = createCounter();
counterB(); // Output: 1 (independent from counterA)