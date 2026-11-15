import createUser from './user.js';

const user1 = createUser("Aida", "Admin");
const user2 = createUser("Nurlan", "Editor");
const user3 = createUser("Ainura", "Viewer");

console.log(user1); // Output: { id: 1, name: 'Aida', role: 'Admin' }
console.log(user2); // Output: { id: 2, name: 'Nurlan', role: 'Editor' }
console.log(user3); // Output: { id: 3, name: 'Ainura', role: 'Viewer' }