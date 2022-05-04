const fs = require('fs');
const sinon = require('sinon');
const { expect } = require("chai");
const writeFile = require('../writeFile');

describe('Quando a função "writeFile" é chamada', () => {
  before(() => {
    sinon.stub(fs, 'writeFile');
  });

  after(() => {
    fs.writeFile.restore();
  });
  describe('Com um arquivo válido', () => {
    it('O retorno é uma string', async () => {
      const result = await writeFile('test.txt', 'test');

      expect(result).to.be.a('string');
    })
    it('O conteúdo da string é exatamente como foi implementado', async () => {
      const result = await writeFile('test.txt', 'test');

      expect(result).to.be.equal('Arquivo escrito com sucesso.');
    })
  })
})