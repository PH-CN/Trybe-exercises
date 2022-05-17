const BooksService = require('../services/BooksService');

const getAll = async (req, res, _next) => {
  try {
    const books = await BooksService.getAll();

    res.status(200).json(books)
  } catch(e) {
    console.log(e.message);
    res.status(500).json({message: "deu ruim família"});
  }
}

const getById = async (req, res, _next) => {
  try {
    const { id } = req.params;
    const book = await BooksService.getById(id);

    res.status(200).json(book)
  } catch(e) {
    console.log(e.message);
    res.status(500).json({message: "deu ruim família"});
  }
}

module.exports = {
  getAll,
  getById
}