const express = require('express');
const bodyParser = require('body-parser');
const Author = require('./models/Author');
const bookController = require('./controllers/bookController');
const port = 3000;

const app = express();

app.use(bodyParser.json());

app.get('/authors', async (req, res) => {
	const authors = await Author.getAll(); 
	return res.status(200).json(authors);
});

app.get('/authors/:id', async (req, res) => {
	const { id } = req.params;
	const author = await Author.getById(id);
	if (!author) return res.status(404).json({ message: 'Couldn\'t find any author' });
	res.status(200).json(author);
});

app.post('/authors', async (req, res) => {
	const { first_name, middle_name, last_name } = req.body;

	if (!Author.isValid(first_name, middle_name, last_name)) {
		return res.status(400).json({ message: 'Dados inválidos' });
	}

	await Author.create(first_name, middle_name, last_name);

	res.status(201).json({ message: 'Autor criado com sucesso! '});
});

app.get('/books', bookController.getAll);

app.get('/books/search', bookController.getByAuthorId);

app.get('/books/:id', bookController.getById);

app.post('/books', bookController.addNewBook);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));