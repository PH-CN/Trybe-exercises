const PromiseFizzBuzz = async (num) => {
  const promise = new Promise((resolve, reject) => {
    if (num < 0 || typeof num !== 'number') {
      reject(new Error('Apenas números maiores que 0.'));
    }
    if (num % 3 === 0 && num % 5 === 0) {
      resolve('FizzBuzz');
    }
    if (num % 3 === 0) {
      resolve('Fizz');
    }
    if (num % 5 === 0) {
      resolve('Buzz');
    } else {
      reject(new Error(num));
    }
  })
  return promise;
}

const execute = async (num) => {
  try {
      const result = await PromiseFizzBuzz(num);
      console.log(result);
  } catch (error) {
      console.log(error.message)
  }
}

execute(5);