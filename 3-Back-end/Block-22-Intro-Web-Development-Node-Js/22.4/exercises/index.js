const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.get('/ping', (req, res) => {
  res.status(200).json({"message": "pong"});
});

app.post('/hello', (req, res) => {
  const { name } = req.body;
  res.status(200).json({"message": `Hello ${name}!!`});
})

app.post('/greetings', (req, res) => {
  const { name, age } = req.body;

  if (age <= 17) return res.status(401).json({"message": "Unauthorized"});

  res.status(200).json({"message": `Hello, ${name}!!`});
});

app.put('/users/:name/:age', (req, res) => {
  const { name, age } = req.params;  
  res.status(200).json({"message": `Your name is ${name} and you are ${age} years old.`});
})

app.listen(3333, () => {
  console.log('On na porta 3333');
});