const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/coins');

const coinSchema = mongoose.Schema({
  dayStart: String,
  dayEnd: String,
  dayOpen: String,
  dayClose: String,
  priceOpen: Number,
  priceHigh: Number,
  priceLow: Number,
  priceClose: Number,
  volumeTraded: Number,
  tradesCount: Number,
});

const Coin = mongoose.model('Coin', coinSchema);

function insertOne(item, callback) {
  Coin.create(item, callback);
}

function findByCoinDate(date, callback) {
  Coin.find({ time_period_start: date }).exec((err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
}

function findAll(callback) {
  Coin.find().exec((err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
}

module.exports.insertOne = insertOne;
module.exports.findByCoinDateId = findByCoinDate;
module.exports.findAll = findAll;
