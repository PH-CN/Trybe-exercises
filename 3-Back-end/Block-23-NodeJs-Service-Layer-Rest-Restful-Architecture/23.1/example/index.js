const express = require('express');
const bodyParser = require('body-parser');
const Author = require('./models/Author');
const Book = require('./models/Book');
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

app.get('/books', async (req, res) => {
	const books = await Book.getAll();
	return res.status(200).json(books);
});

app.get('/books/search', async (req, res) => {
	const { authorId } = req.query;
	const books = await Book.getByAuthorId(authorId);
	if (!books) return res.status(404).json({message: 'Couldn\'t find any books'});
	return res.status(200).json(books);
});

app.get('/books/:id', async (req, res) => {
	const { id } = req.params;
	const book = await Book.getById(id);
	if (!book) return res.status(404).json({ message: 'Couldn\'t find any book' });
	res.status(200).json(book);
});

app.post('/books', async (req, res) => {
	const { title, author_id } = req.body;

	if (!await Book.validation(title, author_id)) {
		return res.status(400).json({ message: 'Invalid data.' });
	}

	await Book.create(title, author_id);

	res.status(201).json({ message: 'Book successfully created!'});
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));