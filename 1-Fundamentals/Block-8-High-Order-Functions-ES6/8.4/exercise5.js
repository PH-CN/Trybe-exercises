const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  return names.toString().split('').reduce((acc,curr) => (curr === 'a' || curr === 'A') ? acc + 1 : acc, 0);
};

console.log(containsA());