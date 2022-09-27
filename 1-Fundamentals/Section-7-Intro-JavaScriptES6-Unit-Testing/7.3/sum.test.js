const sum = require('./sum');

describe('Sum tests', () => {
  test('Verifica se retorna 9 na soma de 4 mais 5', () => {
    expect(sum(4, 5)).toBe(9);
  });

  test('Verifica se retorna 0 com os parâmetros sendo 0', () => {
    expect(sum(0, 0)).toBe(0);
  });

  test('Verifica se o erro é lançado com um parâmetro sendo string', () => {
    expect(() => { sum(4, "5") }).toThrow();
  });

  test("Verifica se a mensagem do erro é 'parameters must be numbers'", () => {
    expect(() => { sum(4, "5") }).toThrow('parameters must be numbers');
  });
})