const mongoose = require('mongoose');

const schema = mongoose.Schema({
  'departmentsCount': Number,
  'id': String,
  'ru': String,
  'uk': String,
}, {
  timestamps: false,
});

module.exports = mongoose.model('cities', schema, 'cities');

