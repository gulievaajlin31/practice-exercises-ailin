const marks = [98, 87, 76, 65, 54];

const [top1, top2, ...others] = marks;

console.log(`Top students: ${top1}, ${top2}. Others: [${others.join(", ")}].`);
// Output: Top students: 98, 87. Others: [76, 65, 54].