const mongoose = require('mongoose');

const schema = mongoose.Schema({
  'buyer': mongoose.Schema.Types.ObjectId,
  'buyerType': String,
  'cityRecipient': String,
  'citySender': String,
  'createdAt': Date,
  'currency': String,
  'dateCancelled': Date,
  'dateCompleted': Date,
  'dateConfirmed': Date,
  'dateDelivered': Date,
  'datePaid': Date,
  'datePending': Date,
  'dateShipped': Date,
  'product': mongoose.Schema.Types.ObjectId,
  'reason': String,
  'reviewFromBuyer': mongoose.Schema.Types.ObjectId,
  'reviewFromSeller': mongoose.Schema.Types.ObjectId,
  'seller': mongoose.Schema.Types.ObjectId,
  'shippingProvider': String,
  'shippingStatus': String,
  'shippingUpdatedAt': Date,
  'status': String,
  'trackingNumber': String,
  'transactionId': String,
  'transactionStatus': String,
  'updatedAt': Date,
}, {
  timestamps: false,
});

module.exports = mongoose.model('orders', schema, 'orders');

