// Input
function calculateFinalGrades(students) {
  return students
    .map((student) => {
      const sumOfScores = student.scores.reduce((acc, score) => acc + score, 0);
      // console.log(sumOfScores);
      const numberOfScores = student.scores.length;
      // console.log(numberOfScores);
      const finalGrade = Math.round(sumOfScores / numberOfScores);

      return {
        id: student.id,
        name: student.name,
        finalGrade: finalGrade,
      };
    })
    .filter((student) => student.finalGrade >= 70);
}
const students = [
  { id: 1, name: "Alice", scores: [85, 90, 92] },
  { id: 2, name: "Bob", scores: [70, 68, 72] },
  { id: 3, name: "Charlie", scores: [60, 65, 58] },
  { id: 4, name: "David", scores: [75, 80, 78] },
];

// Output
const passedStudents = calculateFinalGrades(students);
console.log(passedStudents);

// Output should be:
// [
//   { id: 1, name: "Alice", finalGrade: 89 },
//   { id: 2, name: "Bob", finalGrade: 70 },
//   { id: 4, name: "David", finalGrade: 78 }
// ]
