const simpsons = require('./simpsons.json');
const fs = require('fs').promises;

async function createSimpsonsFamily() {
  const simpsons = await fs
    .readFile('./simpsons.json', 'utf-8')
    .then((fileContent) => JSON.parse(fileContent));
    const simpsonsFamily = simpsons.filter((sim) => ['1','2','3','4'].includes(sim.id));
    await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamily));
}

async function addNelsonToFamily() {
  const simpsonsFamily = await fs
    .readFile('./simpsonsFamily.json', 'utf-8')
    .then((fileContent) => JSON.parse(fileContent));
    simpsonsFamily.push({ "id": "8","name": "Nelson Muntz" });
    await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamily));
}

const showAllCharacters = () => {
  simpsons.map((sim, i) => {
    console.log(`${i + 1} - ${sim.name}`)
  })
}

const getCharacterById = (id) => {
  const promise = new Promise((resolve, reject) => {
    const char = simpsons.find((sim) => sim.id === String(id));
    if (!char) {
      reject(new Error('id não encontrado'));
    }
    resolve(char);
  })
  return promise;
}

const getCharById = async (id) => {
  const char = await getCharacterById(id);
  console.log(char);
}

const removeCharsOnOutPut = () => {
  const result = simpsons.filter((sim) => {
    return sim.id !== '10' && sim.id !== '6'
  })
  console.log(result);
}

const copyJsonContent = () => {
  const chars = simpsons.filter((sim) => sim.id < '4');
}

async function replaceNelson () {
  // Realizamos a leitura do arquivo
  return fs.readFile('./simpsonsFamily.json', 'utf-8')
    // Interpretamos o conteúdo como JSON
    .then((fileContent) => JSON.parse(fileContent))
    // Filtramos o array para remover o personagem Nelson
    .then((simpsons) => simpsons.filter((simpson) => simpson.id !== '8'))
    // Criamos um novo Array contendo a personagem Maggie
    .then((simpsonsWithoutNelson) => simpsonsWithoutNelson
      .concat([{ id: '8', name: 'Maggie Simpson' }]))
    // Escrevemos o novo array no arquivo
    .then((simpsonsWithMaggie) =>
      fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsWithMaggie)));
}

createSimpsonsFamily();
replaceNelson();