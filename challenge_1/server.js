const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './public')));

const port = 8000;
app.listen(port, () => console.log(`Server is up on: ${port}`));

module.exports = app;
