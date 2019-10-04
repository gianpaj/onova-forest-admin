const mongoose = require('mongoose');

const schema = mongoose.Schema({
  'dateCreated': Date,
  'follower': mongoose.Schema.Types.ObjectId,
  'following': mongoose.Schema.Types.ObjectId,
}, {
  timestamps: false,
});

module.exports = mongoose.model('follows', schema, 'follows');

