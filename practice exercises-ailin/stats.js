import * as math from './mathUtils.js';

export function sum(numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total = math.add(total, numbers[i]);
    }
    return total;
}

export function average(numbers) {
    if (numbers.length === 0) return 0;
    
    const total = sum(numbers);

    return math.divide(total, numbers.length);
}