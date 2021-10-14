let aliquotaINSS;
let aliquotaImR;
const salarioBruto = 5050.33;

if (salarioBruto <= 1556.94) {
  aliquotaINSS = salarioBruto * 0.08;
} else if (salarioBruto <= 2594.92) {
  aliquotaINSS = salarioBruto * 0.09;
} else if (salarioBruto <= 5189.82) {
  aliquotaINSS = salarioBruto * 0.11;
} else {
  aliquotaINSS = 570.88;
}

let salarioBase = salarioBruto - aliquotaINSS;

if (salarioBase <= 1903.98) {
  aliquotaImR = 0;
} else if (salarioBase <= 2826.65 && salarioBase >= 1903.98) {
  aliquotaImR = (salarioBase * 0.075) - 142.80; 
} else if (salarioBase <= 3751.05 && salarioBase >= 2826.65) {
  aliquotaImR = (salarioBase * 0.15) - 354.80;
} else if (salarioBase <= 4664.68 && salarioBase >= 3751.05) {
  aliquotaImR = (salarioBase * 0.225) - 636.13;
}
 else {
  aliquotaImR = (salarioBase * 0.275) - 869.36;
}
  
console.log("Salário merecido = " + (salarioBase - aliquotaImR))