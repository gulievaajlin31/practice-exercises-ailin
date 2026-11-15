 //This code executes immediately upon being imported, 
// modifying global state and performing logging without exporting anything.
console.log("Analytics initialized");

if (typeof window !== "undefined") {
    window.analyticsEnabled = true;
}