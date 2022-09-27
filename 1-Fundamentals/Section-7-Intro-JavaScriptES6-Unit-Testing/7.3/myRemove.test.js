const myRemove = require('./myRemove');

describe('myRemove test', () => {
  test('Verifica se o retorno é um array sem o 3 passado como parâmetro', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });

  test('Verifica se o retorno não é o array padrão', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });

  test('Verifica se o retorno não é o array padrão', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
})