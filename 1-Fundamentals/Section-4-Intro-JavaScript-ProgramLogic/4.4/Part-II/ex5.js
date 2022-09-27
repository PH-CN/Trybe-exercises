function highestCount(numbers) {
  let result = 0;
  let biggest = numbers[0]
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > biggest) {
      biggest = numbers[i];
    }
  }
  for (let n = 0; n < numbers.length; n++) {
    if (numbers[n] === biggest) {
      result++
    }
  }
  return result
}