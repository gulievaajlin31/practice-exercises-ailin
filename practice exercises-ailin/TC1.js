function calculatePrice(basePrice, taxRate = 0.12) {
    return basePrice + (basePrice * taxRate);
}

console.log(calculatePrice(100));        // Output: 112 (12% tax by default)
console.log(calculatePrice(100, 0.2));   // Output: 120 (20% tax)