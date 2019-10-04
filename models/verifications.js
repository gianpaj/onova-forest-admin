const mongoose = require('mongoose');

const schema = mongoose.Schema({
  'createdAt': Date,
  'resetToken': String,
  'user': mongoose.Schema.Types.ObjectId,
}, {
  timestamps: false,
});

module.exports = mongoose.model('verifications', schema, 'verifications');

