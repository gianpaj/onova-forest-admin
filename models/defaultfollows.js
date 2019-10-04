const mongoose = require('mongoose');

const schema = mongoose.Schema({
  'initialFollowersCount': Number,
  'updatedAt': Date,
  'user': mongoose.Schema.Types.ObjectId,
}, {
  timestamps: false,
});

module.exports = mongoose.model('defaultfollows', schema, 'defaultfollows');

