import createConfig, { API_URL, TIMEOUT } from './config.js';

console.log("--- Global Constants ---");
console.log("Default Production API_URL:", API_URL);
console.log("Default TIMEOUT:", TIMEOUT);

console.log("\n--- Environment Configuration ---");
const devConfig = createConfig("dev");
console.log("Dev Config:", devConfig); 
// Output: { apiUrl: 'http://localhost:3000/api', timeout: 10000 }