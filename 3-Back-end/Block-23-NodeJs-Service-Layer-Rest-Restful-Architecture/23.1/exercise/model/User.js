const connection = require('./connection');

const validation = (firstName, lastName, email, password) => {
	if (!firstName) {
		return { error: true, message: 'O campo "firstName" é obrigatório'};
	}
	if (!lastName) {
		return { error: true, message: 'O campo "lastName" é obrigatório'};
	}
	if (!email) {
		return { error: true, message: 'O campo "email" é obrigatório' };
	}
	if (!password || typeof password !== 'string' || password < 6) {
		return { error: true, message: 'O campo "password" deve ser uma string de 6 ou mais caracteres' };
	}
};

const create = async (firstName, lastName, email, password) => {
	return await connection.execute('INSERT INTO model_example.users (firstName, lastName, email, password) VALUES (?, ?, ?, ?)', [firstName, lastName, email, password]);
};

const getAll = async () => {
	return await connection.execute('SELECT * FROM model_example.users');
};

const getById = async (id) => {
	return await connection.execute('SELECT * FROM model_example.users WHERE id = ?', [id]);
};
module.exports = {
	validation,
	create,
	getAll,
	getById
};