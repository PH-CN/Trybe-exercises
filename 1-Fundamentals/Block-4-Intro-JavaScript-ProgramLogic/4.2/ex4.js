let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = 0;

for (let i = 0; i < numbers.length; i++) {
  result += numbers[i]
}

final = (result / numbers.length)

if (final > 20) {
  console.log('maior que 20')
} else {
  console.log('menor que 20')
}