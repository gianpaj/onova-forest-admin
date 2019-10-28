const mongoose = require('mongoose');

const { Schema } = mongoose;

const schema = new Schema({
  seller: {
    type: Schema.Types.ObjectId,
    ref: 'users',
    required: true,
  },
  categoryIds: {
    type: [Number],
    required: true,
  },
  uuid: String,
  createdAt: Date,
  currency: String,
  description: String,
  dropId: {
    type: Schema.Types.ObjectId,
    ref: 'drops',
  },
  locality: String,
  photoURIs: {
    type: [String],
    // required: true, // added async after the images are uploaded to GSC
  },
  price: {
    type: Schema.Types.Decimal128,
    required: true,
  },
  quantity: Number,
  reservedDate: Date,
  status: {
    type: String,
    required: true,
    default: 'forsale',
    enum: ['forsale', 'sold', 'banned', 'deleted', 'ready'],
  },
  updatedAt: Date,
  weight: Number,
}, {
  timestamps: false,
});

module.exports = mongoose.model('products', schema, 'products');

