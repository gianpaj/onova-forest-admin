const mongoose = require('mongoose');

const { Schema } = mongoose;

const GeoJSON = new Schema({
  type: { type: String, enum: ['Point'], required: true },
  coordinates: [Number],
});


const schema = new Schema({
  categoryIds: {
    type: [Number],
    required: true,
  },
  'createdAt': Date,
  'currency': String,
  'description': String,
  dropId: {
    type: Schema.Types.ObjectId,
    ref: 'Drop',
  },
  location: { type: GeoJSON, required: false },
  'locality': String,
  photoURIs: {
    type: [String],
    // required: true, // added async after the images are uploaded to GSC
  },
  price: {
    type: Schema.Types.Decimal128,
    required: true,
  },
  'quantity': Number,
  'reservedDate': Date,
  seller: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  status: {
    type: String,
    required: true,
    default: 'forsale',
    enum: ['forsale', 'sold', 'banned', 'deleted', 'ready'],
  },
  'updatedAt': Date,
  'uuid': String,
  'weight': Number,
}, {
  timestamps: false,
});

module.exports = mongoose.model('products', schema, 'products');

