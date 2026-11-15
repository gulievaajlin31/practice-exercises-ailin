export const API_URL = "https://api.production.com";
export const TIMEOUT = 5000;

// Default export
export default function createConfig(env) {
    if (env === "dev") {
        return {
            apiUrl: "http://localhost:3000/api",
            timeout: 10000
        };
    } else if (env === "prod") {
        return {
            apiUrl: API_URL,
            timeout: TIMEOUT
        };
    }
    
    throw new Error(`Unsupported environment: ${env}`);
}