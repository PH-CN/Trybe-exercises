// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Mamão', 'Pessêgo', 'Banana'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Leite condensado', 'Canela', 'Gelo'];

const fruitSalad = (fruit, additional) => {
   return [...fruit, ...additional];
};

console.log(fruitSalad(specialFruit, additionalItens));