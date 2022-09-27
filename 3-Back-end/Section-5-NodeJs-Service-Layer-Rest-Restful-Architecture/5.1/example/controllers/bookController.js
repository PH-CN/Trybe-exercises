const bookService = require('../services/bookService');

const getAll = async (req, res) => {
	const books = await bookService.getAll();
	return res.status(200).json(books);
};

const getByAuthorId = async (req, res) => {
	const { authorId } = req.query;
	const books = await bookService.getByAuthorId(authorId);
	if (!books) return res.status(404).json({message: 'Couldn\'t find any books'});
	return res.status(200).json(books);
};

const getById = async (req, res) => {
	const { id } = req.params;
	const book = await bookService.getById(id);
	if (!book) return res.status(404).json({ message: 'Couldn\'t find any book' });
	res.status(200).json(book);
};

const addNewBook = async (req, res) => {
	const { title, author_id } = req.body;

	const newBook = await addNewBook(title, author_id);

	if (newBook.error) {
		return res.status(400).json(newBook.message);
	}

	await bookService.create(title, author_id);

	res.status(201).json({ message: 'Book successfully created!'});
};

module.exports = {
	getAll,
	getByAuthorId,
	getById,
	addNewBook
};