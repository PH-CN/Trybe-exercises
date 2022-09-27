const myFizzBuzz = require('./myFizzBuzz');

describe('myFizzBuzz Tests', () => {
  test('Verifica se retorna fizzbuzz com um número divisível por 3 e por 5', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });
  
  test('Verifica se retorna fizz com um número divisível por 3', () => {
    expect(myFizzBuzz(6)).toBe('fizz');
  });
  
  test('Verifica se retorna buzz com um número divisível por 5', () => {
    expect(myFizzBuzz(10)).toBe('buzz');
  });
  
  test('Verifica se retorna o mesmo número passado como parâmetro se o mesmo não é divisível por 3 nem por 5', () => {
    expect(myFizzBuzz(11)).toBe(11);
  });
  
  test('Verifica se retorna buzz com um número divisível por 5', () => {
    expect(myFizzBuzz('hello')).toBe(false);
  });
})