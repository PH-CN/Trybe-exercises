const readline = require('readline-sync');

const calculateIMC = (weight, height) => {
  const calculation = weight / (height * height);
  if (calculation < 18.5) {
    return 'Abaixo do peso (magreza)'
  }
  if (calculation > 18.5 && calculation < 24.9) {
    return 'Peso normal'
  }
  if (calculation > 25 && calculation < 29.9) {
    return 'Acima do peso (sobrepeso)'
  }
  if (calculation > 30 && calculation < 34.9) {
    return 'Obesidade grau I'
  }
  if (calculation > 35 && calculation < 39.9) {
    return 'Obesidade grau II'
  }
  if (calculation > 40) {
    return 'Obesidade graus III e IV'
  }
}

const weight = readline.questionFloat('Quanto você pesa?\n R: ');
const height = readline.questionFloat('Qual sua altura?\n R: ');

console.log(calculateIMC(weight, height));