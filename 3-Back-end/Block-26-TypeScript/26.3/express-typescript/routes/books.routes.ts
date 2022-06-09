import { Router } from 'express';
import BooksController from '../controllers/books.controller';
import validationBook from '../middlewares/books.middleware';

const booksController = new BooksController();

const router = Router();

router.get('/books', booksController.getAll);
router.get('/books/:id', booksController.getById);
router.post('/books/', validationBook, booksController.create);
router.put('/books/:id', validationBook, booksController.update);


export default router;