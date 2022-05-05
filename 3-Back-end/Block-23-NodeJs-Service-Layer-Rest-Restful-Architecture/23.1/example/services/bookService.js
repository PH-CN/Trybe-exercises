const bookModel = require('../models/bookModel');
const Author = require('../models/Author');

const getById = async (id) => {
	const book = await bookModel.getById(id);

	return book;
};

const getAll = async () => {
	const allBooks = await bookModel.getAll();
  
	return allBooks;
};

const getByAuthorId = async () => {
	const books = await bookModel.getByAuthorId();

	return books;
};

const addNewBook = async (title, author_id) => {
	const authors = await Author.getAll();
	const ids = authors.map((a) => a.id);
	if (!title || title.length < 3) return { error: true, message: 'O título é obrigatório e deve ter ao menos 3 carácteres.' };
	if (!author_id || !ids.includes(author_id)) return { error: true, message: 'Nenhum autor cadastrado escreveu este livro.' };

	return { error: false, message: 'Livro cadastrado com sucesso' };
};

module.exports = {
	getById,
	getAll,
	getByAuthorId,
	addNewBook
};
