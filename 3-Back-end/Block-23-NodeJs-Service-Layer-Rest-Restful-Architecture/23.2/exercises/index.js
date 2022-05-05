const express = require('express');
const cepController = require('./controllers/cepController');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/ping', cepController.pong);

app.get('/cep/:cep', cepController.getCep);

app.post('/cep', cepController.addCep);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));