const cepService = require('../services/cepService');

const pong = (req, res) => res.status(200).json({message: 'pong'});

const getCep = async (req, res) => {
	const { cep } = req.params;

	const foundCep = await cepService.getCep(cep);

	if (foundCep.error) {
		return res.status(404).json(foundCep.error);
	}

	return res.status(200).json(foundCep);
};

const addCep = async (req, res) => {
	const { cep, logradouro, bairro, localidade, uf } = req.body;

	const newCep = await cepService.addCep(cep, logradouro, bairro, localidade, uf);

	if (newCep.error && newCep.error.code === 'invalidData') {
		return res.status(400).json(newCep.error);
	}
	if (newCep.error && newCep.error.code === 'alreadyExists') {
		return res.status(409).json(newCep.error);
	}

	const response = {
		cep,
		logradouro,
		bairro,
		localidade,
		uf
	};

	return res.status(201).json(response);
};
 
module.exports = { 
	pong,
	getCep,
	addCep
};