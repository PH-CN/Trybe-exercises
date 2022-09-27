const connection = require('./connections');

const getCep = async (cep) => {
	return await connection.execute('SELECT * FROM cep_lookup.ceps WHERE cep = ?', [cep]);
};

const addCep = async (cep, logradouro, bairro, localidade, uf) => {
	return await connection.execute('INSERT INTO cep_lookup.ceps (cep, logradouro, bairro, localidade, uf) VALUES (?, ?, ?, ?, ?)', [cep, logradouro, bairro, localidade, uf]);
};

module.exports = {
	getCep,
	addCep
};