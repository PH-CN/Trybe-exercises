const express = require('express');
const bodyParser = require('body-parser');
const arraySimpsons = require('./simpson.json');

const app = express();

app.use(bodyParser.json());

app.get('/simpsons', (req, res) => {
  res.status(200).json(arraySimpsons);
})

app.get('/simpsons/:id', (req, res) => {
  const { id } = req.params;
  const char = arraySimpsons.find((s) => s.id === id); 
  res.status(200).json(char);
});

app.post('/simpsons', (req, res) => {
  const { id, name } = req.body;
  const exists = arraySimpsons.find((s) => s.id === id);
  if (exists) return res.status(409).json({"message": "id already exists."});
  arraySimpsons.push({ id, name });
  res.status(204).end();
})

app.listen(3002, () => {
  console.log('O pai tá simpsons na 3002');
});