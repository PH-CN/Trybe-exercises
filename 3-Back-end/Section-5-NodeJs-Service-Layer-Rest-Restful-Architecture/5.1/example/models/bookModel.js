const connection = require('./connection');

const serialize = (bookData) => {
	return {
		id: bookData.id,
		title: bookData.title,
		authorId: bookData.author_id
	};
};

const getAll = async () => {
	const [books] = await connection.execute('SELECT * FROM books');

	return books.map(serialize);
};

const getByAuthorId = async (id) => {
	const [books] = await connection.execute('SELECT * FROM books WHERE author_id = ?', [id]);

	if (books.length === 0) return null;

	return books.map(serialize);
};

const getById = async (id) => {
	const query = 'SELECT * FROM books WHERE id = ?';
	const [book] = await connection.execute(query, [id]);
	if (book.length === 0) return null;
	return book.map(serialize)[0];
};

const create = async (title, author_id) => {
	connection.execute('INSERT INTO model_example.books (title, author_id) VALUES (?, ?)', [title, author_id]);
};

module.exports = {
	getAll,
	getByAuthorId,
	getById,
	create
};