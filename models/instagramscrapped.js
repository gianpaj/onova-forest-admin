const mongoose = require('mongoose');

const schema = mongoose.Schema({
  'instagramId': String,
  'instagramOwnerId': String,
  'shortcode': String,
  'timestamp': Number,
  'username': String,
}, {
  timestamps: false,
});

module.exports = mongoose.model('instagramscrapped', schema, 'instagramscrapped');

