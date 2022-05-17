const express = require('express')
const app = express()
const port = 3000

const BooksController = require('./controllers/BooksController');

app.use(express.json());

app.get('/books', BooksController.getAll);
app.get('/books/:id', BooksController.getById);


app.listen(port, () => console.log(`Example app listening on port ${port}!`));