const course = {
  code: "SE101",
  title: "Intro to Software Engineering",
  credits: 6,
  semester: "Fall",
  instructor: "Nurlan Shaidullaev"
};

// Using object destructuring with the rest operator to extract specific keys 
// and bundle the remaining properties into a new 'details' object
const { code, title, ...details } = course;

console.log("Code:", code);       // Output: SE101
console.log("Title:", title);     // Output: Intro to Software Engineering
console.log("Details:", details); // Output: { credits: 6, semester: 'Fall', instructor: 'Nurlan Shaidullaev' }