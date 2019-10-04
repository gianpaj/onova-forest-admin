const mongoose = require('mongoose');

const schema = mongoose.Schema({
  'createdAt': Date,
  'fromUser': mongoose.Schema.Types.ObjectId,
  'lang': String,
  'order': mongoose.Schema.Types.ObjectId,
  'rateNumber': Number,
  'targetUser': mongoose.Schema.Types.ObjectId,
  'text': String,
}, {
  timestamps: false,
});

module.exports = mongoose.model('reviews', schema, 'reviews');

