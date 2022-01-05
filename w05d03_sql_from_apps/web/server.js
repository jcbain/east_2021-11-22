require('dotenv').config()
const express = require('express');
const morgan = require('morgan');
const { getAllPrimates, getPrimateById } = require('./database/queries');

const app = express();
const port = process.env.PORT || 5678;

app.use(morgan('dev'));

app.get('/primates', (req, res) => {
  getAllPrimates((primates) => {
    res.json(primates);
  });
});

app.get('/primates/:id', (req, res) => {
  const id = req.params.id;
  getPrimateById(id)
    .then((primate) => {
      res.json(primate);
    });
})

app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
})