const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const { findByCoinDate, findAll } = require('./db/db');

const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './public')));

app.get('/coins', (request, response) => {
  response.set({ 'Access-Control-Allow-Origin': '*' });
  findAll((err, results) => {
    if (err) {
      console.log(err);
      response.sendStatus(500);
    } else {
      response.json(results);
    }
  });
});

const port = 8000;
app.listen(port, () => console.log(`Server is up on: ${port}`));

module.exports = app;
