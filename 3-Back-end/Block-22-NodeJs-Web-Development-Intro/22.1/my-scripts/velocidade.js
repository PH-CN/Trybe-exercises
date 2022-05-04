const readline = require("readline-sync")

const calculateAvgSpeed = (distance, time) => {
  return (distance / time) 
}

const distance = readline.questionInt('Qual a distância? \n R: ');
const time = readline.questionInt('Qual o tempo? \n R: ');

console.log(calculateAvgSpeed(distance, time));