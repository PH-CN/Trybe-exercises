let numbers = [];

for (let i = 1; i <= 25; i ++) {
  numbers.push(i);
}

for (let i = 0; i <= 25; i ++) {
  console.log(numbers[i] / 2)
  if (numbers[i] == 25) {
    break;
  }
}