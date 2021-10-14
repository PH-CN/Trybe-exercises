let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let array = []
for (let index = 0; index < numbers.length; index += 1) {
  if (index + 1 < numbers.length) {
    array.push(numbers[index] * numbers[index + 1])
  } else {
    array.push(numbers[index] * 2 )
  }
}
console.log(array)