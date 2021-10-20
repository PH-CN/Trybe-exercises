const custo = 800;
const valorVenda = 1000;

let custoSemImposto = (1000 * 800)
let custoTotal = (custoSemImposto + (custoSemImposto * 0.2))
let valorVendaTotal = (valorVenda * 1000)
let lucro = (valorVendaTotal - custoTotal)
console.log(lucro)