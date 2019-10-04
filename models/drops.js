const mongoose = require('mongoose');

const schema = mongoose.Schema({
  'createdAt': Date,
  'posted': Boolean,
  'scheduledAt': Date,
  'seller': mongoose.Schema.Types.ObjectId,
  'status': String,
  'updatedAt': Date,
  'uuid': String,
}, {
  timestamps: false,
});

module.exports = mongoose.model('drops', schema, 'drops');

