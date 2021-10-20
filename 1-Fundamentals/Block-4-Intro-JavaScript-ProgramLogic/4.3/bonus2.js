let check= 2;
let divisor = 1;

for (let number = 2; number <= check; number += 1) {
  if (check % number === 0) divisor += 1;
}

if (divisor === 2) {
  console.log(check + ' é primo')

} else {
  console.log(check + ' não é primo')
}
