const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
    
const finalGrade = (right, student, action) => {
  let counter = 0;
  for (let i = 0; i < right.length; i += 1) {
    counter += action(right[i], student[i]);
  }
  return counter;
}

const action = (rAnswer, sAnswer) => {
  if (rAnswer === sAnswer) {
    return 1;
  }
  if (sAnswer === 'N.A') {
    return 0;
  }
  return -0.5;
}

console.log(finalGrade(RIGHT_ANSWERS, STUDENT_ANSWERS, action))