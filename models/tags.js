const mongoose = require('mongoose');

const schema = mongoose.Schema({
  '_id': String,
  'createdAt': Date,
  'updatedAt': Date,
}, {
  timestamps: false,
});

module.exports = mongoose.model('tags', schema, 'tags');

