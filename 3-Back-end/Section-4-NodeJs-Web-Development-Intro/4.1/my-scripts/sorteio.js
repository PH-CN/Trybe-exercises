const readline = require("readline-sync");

function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

const restart = () => {
  const ans = readline.question('Gostaria de tentar novamente? S/N');
  return ans
}

const compare = () => {
  const randomNumber = getRandomNumber(0, 11);
  const choosenNumber = readline.questionInt('Qual número você quer escolher?\n R: ');
  if (randomNumber === choosenNumber) {
    console.log('Parabéns, número certo!');
  } else {
    console.log(`Opa, não foi dessa vez, o número era ${randomNumber}`);
  }
  const ans = restart();
  if (ans === 'n') return console.log('Até mais ver')
  if (ans === 's') compare();
}

compare();