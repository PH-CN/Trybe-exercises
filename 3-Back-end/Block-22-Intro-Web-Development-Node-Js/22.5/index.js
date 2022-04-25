const express = require('express');
const axios = require('axios');

const app = express();

const regex = new RegExp(/^[A-Za-z0-9]{12}$/);

const getApi = async () => {
	// eslint-disable-next-line no-undef
	const response = await axios.get('https://api.coindesk.com/v1/bpi/currentprice/BTC.json);');
	return response.data;
};

app.get('/btc/price', async (req, res) => {
	const { authorization } = req.headers;
	if (!regex.test(authorization)) {
		return res.status(401).json({message: 'Unauthorized'});
	}
	const data = await getApi();
	return res.status(200).json(data);
});

const posts = [
	// {'id': '1', 'content': 'olá, bom dia'},
	// {'id': '2', 'content': 'olá, boa tarde'},
	// {'id': '3', 'content': 'olá, boa noite'},
];

app.get('/posts', (req, res) => {
	if (posts.length > 0) return res.status(200).json(posts);
	return res.status(200).json({'posts': []});
});

app.get('/posts/:id', (req, res) => {
	const { id } = req.params;
	const post = posts.find((p) => p.id === id);
	if (!id || !post) return res.status(404).json({message: 'post not found'});
	return res.status(200).json(post);
});

app.use((req, res) => {
	return res.status(404).json({ 'message': 'Opsss, route not found!' });
});

app.listen(3000, () => {
	console.log('rodando na 3000');
});