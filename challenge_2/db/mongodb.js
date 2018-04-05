const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/shoppingChart');

const shoppingSchema = mongoose.Schema({
  name: String,
  email: String,
  password: String,
  shipTo: {
    line1: String,
    line2: String,
    city: String,
    state: String,
    zipCode: Number,
  },
  phone: Number,
  creditCard: {
    number: Number,
    expDate: String,
    cvv: Number,
    billingZip: Number,
  },
});

const Shopping = mongoose.model('Shopping', shoppingSchema);

function insertOne(item, cb) {
  Shopping.create(item, cb);
  mongoose.disconnect();
}

function findAll(cb) {
  Shopping.find().exec((err, results) => {
    if (err) {
      cb(err, null);
    } else {
      cb(null, results);
    }
  });
}

module.exports.insertOne = insertOne;
module.exports.findAll = findAll;
