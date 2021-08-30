const grades = [73, 91, 88, 56, 62, 84, 95, 96, 88, 92]
sortedGrades= grades.slice();
sortedGrades.sort()
const range= sortedGrades[(sortedGrades.length-1)]- sortedGrades[0];
console.log(grades)
console.log(sortedGrades)
console.log(range)


if(grades.length%2==0){
    median= (sortedGrades[(grades.length/2)-1]+ sortedGrades[sortedGrades.length/2])/2
}else{
    median= sortedGrades[(Math.floor(grades.length/2))]

}

console.log(median)

const secHalf= grades.slice((grades.length)/2)
secHalf.sort()
halfRange= secHalf[secHalf.length-1]- secHalf[0]
console.log(secHalf)
console.log(halfRange)


console.log("Stats:\n\tRange: "+range+"\n\tMedian: "+median+"\n\tHalf Range: "+halfRange)

