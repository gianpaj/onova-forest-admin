const mongoose = require('mongoose');

const schema = mongoose.Schema({
  'createdAt': Date,
  'emailAddress': String,
  'mobileNumber': String,
  'updatedAt': Date,
}, {
  timestamps: false,
});

module.exports = mongoose.model('usersweb', schema, 'usersweb');

