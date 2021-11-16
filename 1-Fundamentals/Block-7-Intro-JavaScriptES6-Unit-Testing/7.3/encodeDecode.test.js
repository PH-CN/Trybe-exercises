const { encode, decode } = require('./encodeDecode');

describe('encodeDecode Tests', () => {
  test('Verifica se encode e decode são funções', () => {
    expect(typeof encode && typeof decode).toEqual('function')
  })

  test('Verifica se a,e,i,o,u vira 1,2,3,4,5', () => {
    expect(encode('a,e,i,o,u')).toEqual('1,2,3,4,5');
  });

  test('Verifica se 1,2,3,4,5 vira a,e,i,o,u ', () => {
    expect(decode('1,2,3,4,5')).toEqual('a,e,i,o,u');
  });

  test('Verifica se as demais letras não são convertidas para números', () => {
    expect(encode('boa tarde familia')).toEqual('b41 t1rd2 f1m3l31');
  });

  test('Verifica se a string recebida pela função tem o mesmo tamanho da string passada', () => {
    expect(encode('boa tarde').length).toEqual(9);
  });
})