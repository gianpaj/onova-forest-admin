const mongoose = require('mongoose');

const schema = mongoose.Schema({
  'cityID': String,
  'id': String,
  'maxWeight': Number,
  'uk': String,
}, {
  timestamps: false,
});

module.exports = mongoose.model('departments', schema, 'departments');

