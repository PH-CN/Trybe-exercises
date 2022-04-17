const readline = require('readline-sync');

const age = readline.questionInt('How old are you?\n A: ');
const name = readline.question('What is your name?\n A: ');

console.log(`Hello ${name}, so you are ${age} years old! Cool!`);