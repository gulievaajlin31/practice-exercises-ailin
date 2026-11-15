import { sum, average } from './stats.js';

const scores = [10, 20, 30, 40, 50];

console.log("--- Statistics Calculations ---");
console.log("Scores:", scores);
console.log("Sum:", sum(scores));         // Output: 150
console.log("Average:", average(scores)); // Output: 30