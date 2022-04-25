const { expect } = require("chai");
const positiveNegative = require('../positiveNegative');

describe('Quando a função "positiveNegative" é chamada', () => {
  describe('Com um número', () => {
    describe('E ele é positivo', () => {
      it('A resposta é "Positivo"', () => {
        const result = positiveNegative(1);
        expect(result).to.be.equal('Positivo');
      });
    });
    describe('E ele é negativo', () => {
      it('A reposta é "Negativo', () => {
        const result = positiveNegative(-1);
        expect(result).to.be.equal('Negativo');
      });
    });
    describe('E ele é igual a 0', () => {
      it('A resposta é "Neutro"', () => {
        const result = positiveNegative(0);
        expect(result).to.be.equal('Neutro');
      });
    });
  });
  describe('Com uma string', () => {
    it('A resposta é uma string dizendo que o valor deve ser um número', () => {
      const result = positiveNegative('a');
      expect(result).to.be.equal('O valor deve ser um número');
    });
  });
});
