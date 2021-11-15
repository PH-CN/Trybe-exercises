const { encode, decode } = require('./encodeDecode');

test('Verifica se a a,e,i,o,u vira 1,2,3,4,5', () => {
  expect(encode('a,e,i,o,u')).toBe('1,2,3,4,5');
});