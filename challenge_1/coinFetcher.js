const https = require('https');
const apiKey = require('./config/coinAPI');

const options = {
  method: 'GET',
  hostname: 'rest.coinapi.io',
  path: '/v1/exchanges',
  headers: { 'X-CoinAPI-Key': apiKey },
};

const request = https.request(options, (response) => {
  const chunks = [];

  response.on('data', (chunk) => {
    chunks.push(chunk);
  });
});

request.end();
