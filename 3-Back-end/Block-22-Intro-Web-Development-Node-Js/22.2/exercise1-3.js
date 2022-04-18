const ex1 = (num1, num2, num3) => {
  const promise = new Promise((resolve, reject) => {
    if (typeof num1 !== 'number' || typeof num2 !== 'number' || typeof num3 !== 'number') {
      reject(new Error('Informe apenas números.'));
    }
    const result = (num1 + num2) * num3;
    if (result < 500) {
      reject(new Error('Valor muito baixo.'));
    }
    resolve(result);
  })
  return promise;
}

const randomNumberGenerator = () => {
  return Math.floor(Math.random() * 100 + 1) 
}

const a = randomNumberGenerator();
const b = randomNumberGenerator();
const c = randomNumberGenerator();

const main = async () => {
  try {
    const result = await ex1(a, b, c);
    console.log(result);
  } catch (error) {
    console.log(error.message)
  }
}

main();