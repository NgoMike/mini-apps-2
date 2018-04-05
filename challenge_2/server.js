const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const { findAll, insertOne } = require('./db/mongodb');

const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './public')));

app.get('/shoppingCart', (request, response) => {
  response.set({ 'Access-Control-Allow-Origin': '*' });
  findAll((err, results) => {
    if (err) {
      console.error(err);
      response.sendStatus(500);
    } else {
      response.json(results);
    }
  });
});

app.post('/shoppingCart', (item, response) => {
  insertOne(item, (error) => {
    if (error) {
      throw error;
    } else {
      response.sendStatus(200);
    }
  });
});

const port = 9000;
app.listen(port, () => console.log(`Server is up on: ${port}`));
