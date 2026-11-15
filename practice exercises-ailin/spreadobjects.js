const baseUser = { name: "Aida", role: "student" };
const extra = { group: "SE-101", active: true };

const userProfile = { ...baseUser, ...extra };
console.log("User Profile:", userProfile); 
// Output: { name: 'Aida', role: 'student', group: 'SE-101', active: true }

const promotedUser = { ...userProfile, role: "class_rep" };
console.log("Promoted User:", promotedUser); 
// Output: { name: 'Aida', role: 'class_rep', group: 'SE-101', active: true }