const grades = [73, 91, 88, 56, 62, 84, 95, 96, 88, 92]
sortedGrades= grades.slice();
sortedGrades.sort()
const range= sortedGrades[(sortedGrades.length-1)]- sortedGrades[0];
console.log(grades)
console.log(sortedGrades)
console.log(range)

const placeMid = Math.floor((sortedGrades.length)/2-1)
const median= sortedGrades[placeMid]
console.log(median)

const secHalf= grades.slice((grades.length)/2)
secHalf.sort()
halfRange= secHalf[secHalf.length-1]- secHalf[0]
console.log(secHalf)
console.log(halfRange)