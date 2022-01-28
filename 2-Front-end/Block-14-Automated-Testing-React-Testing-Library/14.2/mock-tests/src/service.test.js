const service = require('./service');

test("testando se a função foi chamada, qual seu retorno e quantas vezes foi chamada", () => {
  service.randomNumber = jest.fn().mockReturnValue(10);
  service.randomNumber();
  expect(service.randomNumber()).toBe(10);
  expect(service.randomNumber).toHaveBeenCalled();
  expect(service.randomNumber).toHaveBeenCalledTimes(2);
});

test("Com a mesma função do exercício anterior, utilizando o mock, crie uma nova implementação, que deve receber dois parâmetros e retornar a divisão do primeiro pelo segundo. Essa implementação deve ocorrer uma única vez.", () => {
  service.randomNumber = jest.fn().mockImplementation((a, b) => a / b);
  expect(service.randomNumber(4, 2)).toBe(2);
  expect(service.randomNumber).toHaveBeenCalledWith(4, 2);
  expect(service.randomNumber).toHaveBeenCalledTimes(1);
});

test('Utilize o mock e desenvolva uma nova implementação que receba três parâmetros', () => {
  service.randomNumber = jest.fn().mockImplementation((a, b, c) => a * b * c);
  expect(service.randomNumber(5, 2, 2)).toBe(20);
  service.randomNumber.mockReset();
  service.randomNumber = jest.fn().mockImplementation((a) => a * 2);
  expect(service.randomNumber(5)).toBe(10);
})

test('Desenvolva uma nova implementação para a primeira função: agora ela deve retornar a string em caixa baixa', () => {
  expect(service.Upper('boa tarde')).toBe('BOA TARDE')
  service.Upper = jest.spyOn(service, 'Upper').mockImplementation((string) => string.toLowerCase());
  expect(service.Upper('BOA TARDE')).toBe('boa tarde');
  service.Upper.mockRestore();
  expect(service.Upper('opa')).toBe('OPA');
})

test('Defina, para a segunda função, uma nova implementação: ela deve retornar a última letra de uma string.', () => {
  expect(service.firstLetter('opa')).toBe('o');
  service.firstLetter = jest.fn().mockImplementation((string) => string[string.length - 1]);
  expect(service.firstLetter('opa')).toBe('a');
})

test('Implemente, na terceira função: ela deve receber três strings e concatená-las.', () => {
  expect(service.concatenateStrings('quer', 'tc?')).toBe('quer tc?');
  service.concatenateStrings = jest.fn().mockImplementation((a, b, c) => `${a} ${b}${c}`);
  expect(service.concatenateStrings('quer', 'tc', '?')).toBe('quer tc?');
})

test("testando requisição caso a promisse resolva", async () => {
  service.fetchDog = jest.fn();
  service.fetchDog.mockResolvedValue("request sucess");

  service.fetchDog();
  expect(service.fetchDog).toHaveBeenCalled();
  expect(service.fetchDog).toHaveBeenCalledTimes(1);
  await expect(service.fetchDog()).resolves.toBe("request sucess");
  expect(service.fetchDog).toHaveBeenCalledTimes(2);
});

test("testando requisição caso a promisse seja rejeitada", async () => {
  service.fetchDog.mockRejectedValue("request failed");

  expect(service.fetchDog).toHaveBeenCalledTimes(0);
  await expect(service.fetchDog()).rejects.toBe("request failed");
  expect(service.fetchDog).toHaveBeenCalledTimes(1);
});