const cepModel = require('../models/cepModel');

const getCep = async (cep) => {
	const regex = /\d{5}-?\d{3}/;
	if (!regex.test(cep)) {
		return { 'error': { 'code': 'invalidData', 'message': 'CEP inválido' } };
	}

	const [foundCep] = await cepModel.getCep(cep);

	if (foundCep.length === 0) {
		return { 'error': { 'code': 'notFound', 'message': 'CEP não encontrado' } };
	}

	return foundCep;
};

const addCep = async (cep, logradouro, bairro, localidade, uf) => {
	if (!cep) return { 'error': { 'code': 'invalidData', 'message': 'O campo cep é obrigatório.' } };
	if (!logradouro) return { 'error': { 'code': 'invalidData', 'message': 'O campo logradouro é obrigatório.' } };
	if (!bairro) return { 'error': { 'code': 'invalidData', 'message': 'O campo bairro é obrigatório.' } };
	if (!localidade) return { 'error': { 'code': 'invalidData', 'message': 'O campo localidade é obrigatório.' } };
	if (!uf) return { 'error': { 'code': 'invalidData', 'message': 'O campo uf é obrigatório.' } };
	const regex = /\d{5}-\d{3}/;
	if (!regex.test(cep)) {
		return { 'error': { 'code': 'invalidData', 'message': 'O cep deve ter 9 dígitos com traço.' } };
	}

	const [cepExists] = await cepModel.getCep(cep);

	if (cepExists.length !== 0) {
		return { 'error': { 'code': 'alreadyExists', 'message': 'CEP já existente' } };
	}

	const [cepCreated] = await cepModel.addCep(cep, logradouro, bairro, localidade, uf);

	return cepCreated;
};

module.exports = {
	getCep,
	addCep
};