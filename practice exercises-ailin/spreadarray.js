const frontEnd = ["HTML", "CSS", "JavaScript"];
const backEnd = ["Node.js", "Express"];

const fullStack = [...frontEnd, ...backEnd];
console.log("Full Stack:", fullStack); 
// Output: [ 'HTML', 'CSS', 'JavaScript', 'Node.js', 'Express' ]

const withReact = ["React", ...frontEnd];
console.log("With React:", withReact); 
// Output: [ 'React', 'HTML', 'CSS', 'JavaScript' ]