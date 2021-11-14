const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// Adiciona ou altra uma key de um dado objeto //
function addNewKey(object, key, value) {
  object[key] = value;
}

addNewKey(lesson2, 'turno', 'noite');

// Lista as keys de um dado objeto //
function listKeys(object) {
  const keys = Object.keys(object);
  console.log(keys);
}

listKeys(lesson1);

// Mostra o tamanho de um dado objeto //
function objectLength(object) {
  const keys = Object.keys(object);
  const length = keys.length;
  console.log(length);
}

objectLength(lesson1);

// Lista os valores de um determinado objeto //
function objectValues(object) {
  const values = Object.values(object);
  console.log(values);
}

objectValues(lesson3);

// Copiando as chaves de todas as lessons para uma chave global //
const allLessons = {
  lesson1: {},
  lesson2: {},
  lesson3: {},
};

Object.assign(allLessons.lesson1, lesson1);
Object.assign(allLessons.lesson2, lesson2);
Object.assign(allLessons.lesson3, lesson3);

// Lista o total do número de estudantes de todas as aulas //
const listStudentsNumber = () => {
  let n1 = allLessons.lesson1.numeroEstudantes;
  let n2 = allLessons.lesson1.numeroEstudantes;
  let n3 = allLessons.lesson1.numeroEstudantes;
  let result = `O total de estudantes é ${n1 + n2 + n3}.`
  return result;
}

console.log(listStudentsNumber());

// Lista o valor da chave de acordo com a sua posição no objeto //
function getValue (object, position) {
  const values = Object.values(object);
  let result = values[position];
  return result;
}

// Verifica se a chave de um dado objeto tem o valor passado //
function verifyPair (object, key, value) {
  if (object[key] === value) {
    return true;
  } else {
    return false;
  }
}