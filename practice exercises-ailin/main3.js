// Side-effect import syntax: imports the module purely to execute its top-level code 
// without binding any variables or exports.
import './analytics.js';

console.log("window.analyticsEnabled:", window.analyticsEnabled); 
// Output: 
// Analytics initialized
// window.analyticsEnabled: true