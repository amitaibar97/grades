const grades = [73, 91, 88, 56, 62, 84, 95, 96, 88, 92]
grades.sort();
const range= grades[(grades.length-1)]- grades[0];
console.log(grades)
console.log(range)

const placeMid = Math.floor((grades.length)/2)
const median= grades[placeMid]
console.log(median)
