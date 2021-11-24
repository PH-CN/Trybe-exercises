const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

saudacoes[1](saudacoes[0]); // Olá

const [FirstIndex, SecondIndex] = saudacoes;

SecondIndex(FirstIndex);