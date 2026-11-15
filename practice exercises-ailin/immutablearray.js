const groups = ["SE-101", "SE-102"];

const groupsWithEnd = [...groups, "SE-103"];
console.log("Added at end:", groupsWithEnd); 
// Output: [ 'SE-101', 'SE-102', 'SE-103' ]

const groupsWithStart = ["SE-001", ...groups];
console.log("Added at start:", groupsWithStart); 
// Output: [ 'SE-001', 'SE-101', 'SE-102' ]

console.log("Original groups:", groups); 
// Output: [ 'SE-101', 'SE-102' ]