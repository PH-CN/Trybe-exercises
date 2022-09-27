const { uppercase } = require('./exercise7');

test.skip('Verifica se o callback está sendo chamado corretamente', (done) => {
  uppercase('boa tarde', (result) => {
    try {
      expect(result).toBe("BOA TARDE");
      done();
    } catch (error) {
      done(error);
    }
  });
});