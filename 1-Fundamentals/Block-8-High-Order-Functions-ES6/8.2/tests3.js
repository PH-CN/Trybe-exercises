const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = () => {
  const result = names.find((name) => {
    return name.length === 5;
  })
  return result;
}

console.log(findNameWithFiveLetters());