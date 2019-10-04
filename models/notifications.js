const mongoose = require('mongoose');

const schema = mongoose.Schema({
  'dateCreated': Date,
  'notifI18n': String,
  'sourceUser': mongoose.Schema.Types.ObjectId,
  'targetUser': mongoose.Schema.Types.ObjectId,
  'triggeredBy': mongoose.Schema.Types.ObjectId,
  'triggeredType': String,
}, {
  timestamps: false,
});

module.exports = mongoose.model('notifications', schema, 'notifications');

