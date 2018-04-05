const coinData = require('./coinData.json');
const mongoose = require('mongoose');
const db = require('./db');

let counter = 0;
coinData.forEach((day) => {
  const eachDay = {
    dayStart: day.time_period_start,
    dayEnd: day.time_period_end,
    timeOpen: day.time_open,
    timeClose: day.time_close,
    priceOpen: day.price_open,
    priceHigh: day.price_high,
    priceLow: day.price_low,
    priceClose: day.price_close,
    volumeTraded: day.volume_traded,
    tradesCount: day.trades_count,
  };
  // save each one into db
  db.insertOne(eachDay, (error) => {
    if (error) {
      throw error;
    } else {
      counter += 1;
      if (counter === 94) {
        mongoose.disconnect();
      }
    }
  });
});

// mongoimport --db coins --collection coinData --file ./db/coinData.json
