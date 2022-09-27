const express = require('express');
const port = 3000;
const app = express();
const User = require('./model/User');

app.use(express.json());

app.post('/user', async (req, res) => {
	try {
		const { firstName, lastName, email, password } = req.body;
		const verify = User.validation(firstName, lastName, email, password);
		if (verify && verify.error) {
			return res.status(400).json(verify.message);
		}
		const [result] = await User.create(firstName, lastName, email, password);

		const response = {
			id: result.insertId,
			firstName,
			lastName,
			email
		};

		res.status(201).json(response);
	} catch (error) {
		console.log(error); 
	}
});

app.get('/user', async (req, res) => {
	const [users] = await User.getAll();

	if (users.length === 0) return [];

	return res.status(200).json(users);
});

app.get('/user/:id', async (req, res) => {
	const { id } = req.params;

	const [user] = await User.getById(id);

	if (user.length === 0) return res.status(404).json({
		'error': true,
		'message': 'Usuário não encontrado'
	});

	return res.status(200).json(user);
});

app.put('/user/:id', async (req, res) => {
	const { id } = req.params;

	const { firstName, lastName, email, password } = req.body;

	const verify = User.validation(firstName, lastName, email, password);

	if (verify && verify.error) {
		return res.status(400).json(verify.message);
	}

	const updatedUser = await User.updateUser(id, firstName, lastName, email, password);

	if (!updatedUser) {
		return res.status(404).json({ error: true, message: 'Usuário não encontrado' });
	}

	const response = {
		id,
		firstName,
		lastName,
		email
	};

	return res.status(200).json(response);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));