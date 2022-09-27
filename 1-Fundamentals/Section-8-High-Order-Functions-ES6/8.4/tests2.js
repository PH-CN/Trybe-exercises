const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const pairs = numbers.filter((number) => number % 2 === 0);

const sumPairs = pairs.reduce((acc, number) => acc + number);

console.log(sumPairs);

const onlyReduce = numbers.reduce((acc, number) => {
  if (number % 2 === 0) return acc + number;
  return acc;
});

console.log(onlyReduce);