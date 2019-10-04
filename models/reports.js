const mongoose = require('mongoose');

const schema = mongoose.Schema({
  'createdAt': Date,
  'product': mongoose.Schema.Types.ObjectId,
  'reporter': mongoose.Schema.Types.ObjectId,
  'text': String,
}, {
  timestamps: false,
});

module.exports = mongoose.model('reports', schema, 'reports');

