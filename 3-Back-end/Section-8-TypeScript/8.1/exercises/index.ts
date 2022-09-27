import * as Exercise from './exercises';

console.log(Exercise.greeter('Maria'));
console.log(Exercise.personAge('Maria', 40));
console.log(`A soma do array é igual a ${Exercise.sumArray([3, 6, 9])}`);

console.log(`Triângulo de base 10cm e altura 25cm: ${Exercise.triangle(10, 25)}cm²`);
console.log(`Triângulo de base 5cm e altura 30cm: ${Exercise.triangle(5, 30)}cm²`);
console.log(`Triângulo de base 100cm e altura 200cm: ${Exercise.triangle(100, 200)}cm²`);

console.log(`Quadrado de lado 10cm: ${Exercise.square(10)}cm²`);
console.log(`Quadrado de lado 5cm: ${Exercise.square(5)}cm²`);
console.log(`Quadrado de lado 100cm: ${Exercise.square(100)}cm²`);

console.log(`Retângulo de base 10cm e altura 25cm: ${Exercise.rectangle(10, 25)}cm²`);
console.log(`Retângulo de base 5cm e altura 30cm: ${Exercise.rectangle(5, 30)}cm²`);
console.log(`Retângulo de base 100cm e altura 200cm: ${Exercise.rectangle(100, 200)}cm²`);

console.log(`Losangulo com D 32cm e d 18cm: ${Exercise.diamond(10, 25)}cm²`);
console.log(`Losangulo com D 200cm e d 50cm: ${Exercise.diamond(5, 30)}cm²`);
console.log(`Losangulo com D 75cm e d 25cm: ${Exercise.diamond(100, 200)}cm²`);

console.log(`Trapézio com B 100cm, b 70cm e altura 50cm: ${Exercise.trapeze(100, 75, 50)}cm²`);
console.log(`Trapézio com B 75cm, b 50cm e altura 35cm: ${Exercise.trapeze(75, 50, 35)}cm²`);
console.log(`Trapézio com B 150cm, b 120cm e altura 80cm: ${Exercise.trapeze(150, 120, 80)}cm²`);

console.log(`Círculo com raio de 25cm: ${Exercise.circle(25)}cm²`);
console.log(`Círculo com raio de 100cm: ${Exercise.circle(100)}cm²`);
console.log(`Círculo com raio de 12,5cm: ${Exercise.circle(12.5)}cm²`);