const mongoose = require('mongoose');

const schema = mongoose.Schema({
}, {
  timestamps: false,
});

module.exports = mongoose.model('discardedusers', schema, 'discardedusers');

