const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = () => {
 const result = numbers.find((number) => {
    return number % 3 === 0 && number % 5 === 0;
  })
  return result;
}

console.log(findDivisibleBy3And5());