const newEmployees = () => {
  const employees = {
    id1: createEmployee('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: createEmployee('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: createEmployee('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

const createEmployee = (name) => {
  let createEmail = `${name.replace(' ', '_').toLowerCase()}@trybe.com`;
  let obj = {
    nomeCompleto: name,
    email: createEmail,
  }
  return obj;
};

console.log(newEmployees());
