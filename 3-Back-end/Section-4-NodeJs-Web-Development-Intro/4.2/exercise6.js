const fs = require('fs').promises;
const readline = require('readline-sync');

const main = async () => {
  const file = readline.question('Qual arquivo deseja ler?\n R: ');
  try {
    const data = await fs.readFile(`./${file}.txt`, 'utf8');
    console.log(data);
  } catch (error) {
    console.log('Arquivo inexistente');
  }
}

main();