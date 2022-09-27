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

const create = async (req, res, _next) => {
  try {
    const { title, author, pageQuantity } = req.body;
    const book = await BooksService.create(title, author, pageQuantity);
    res.status(200).json(book)
  } catch (e) {
    console.log(e.message);
    res.status(500).json({message: "deu ruim família"});
  }
}

const update = async (req, res, _next) => {
  try {
    const { id } = req.params
    const bookObj = req.body;
    const [book] = await BooksService.update(id, bookObj);
    console.log(book);
    if (!book) {
      res.status(404).json({message: "Book not found!"})
    }
    res.status(200).json({message: "Book updated!"})
  } catch (e) {
    console.log(e.message);
    res.status(500).json({message: "deu ruim família"});
  }
}

const remove = async (req, res, _next) => {
  try {
    const { id } = req.params;
    await BooksService.remove(id);
    res.status(200).json({message: "Book removed!"})
  } catch (e) {
    console.log(e.message);
    res.status(500).json({message: "deu ruim família"});
  }
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove
}