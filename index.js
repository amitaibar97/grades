const grades = [0,1,2,3,4,5,6,7,8,9]
sortedGrades= grades.slice();
sortedGrades.sort()
const range= sortedGrades[(sortedGrades.length-1)]- sortedGrades[0];
console.log(grades)
console.log(sortedGrades)
console.log(range)

const placeMid = Math.floor((sortedGrades.length)/2-1)
const median= (sortedGrades[placeMid]+sortedGrades.length/2)/2
console.log(median)

const secHalf= grades.slice((grades.length)/2)
secHalf.sort()
halfRange= secHalf[secHalf.length-1]- secHalf[0]
console.log(secHalf)
console.log(halfRange)


console.log("Stats:\n\tRange: "+range+"\n\tMedian: "+median+"\n\tHalf Range: "+halfRange)

