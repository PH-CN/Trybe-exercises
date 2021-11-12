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
function addNewKey (object, key, value) {
  object[key] = value;
}

addNewKey(lesson2, 'turno', 'noite');

// Lista as keys de um dado objeto //
function listKeys (object) {
  const keys = Object.keys(object);
  console.log(keys)
}

listKeys(lesson1)

// Mostra o tamanho de um dado objeto //
function objectLength (object) {
  const keys = Object.keys(object);
  const length = keys.length;
  console.log(length)
}

objectLength(lesson1)

// Lista os valores de um determinado objeto //
function objectValues (object) {
  const values = Object.values(object);
  console.log(values)
}

objectValues(lesson3)

const 