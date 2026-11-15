const student = { id: 1, name: "Aida", group: "SE-101", gpa: 3.8 };

const updatedStudent = { ...student, gpa: 3.9 };

console.log("Original Student:", student);
// Output: { id: 1, name: 'Aida', group: 'SE-101', gpa: 3.8 }

console.log("Updated Student:", updatedStudent);
// Output: { id: 1, name: 'Aida', group: 'SE-101', gpa: 3.9 }

// Verifying immutability
console.log("Are they the same object reference?", student === updatedStudent); 
// Output: false (they exist independently in memory)