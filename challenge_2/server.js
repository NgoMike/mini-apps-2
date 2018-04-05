const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './public')));

const port = 9000;

app.listen(port, () => console.log(`Server is up on: ${port}`));

