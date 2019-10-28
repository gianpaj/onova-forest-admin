const mongoose = require('mongoose');

const { Schema } = mongoose;

const schema = new Schema({
  buyer: {
    type: Schema.Types.ObjectId,
    ref: 'users',
    required: true,
  },
  buyerType: {
    type: String,
    required: true,
    enum: ['users', 'userswebs'],
  },
  cityRecipient: String,
  citySender: String,
  createdAt: Date,
  currency: {
    type: String,
    required: true,
    default: 'UAH',
  },
  dateCancelled: Date,
  dateCompleted: Date,
  dateConfirmed: Date,
  dateDelivered: Date,
  datePaid: Date,
  datePending: Date,
  dateShipped: Date,
  product: {
    type: Schema.Types.ObjectId,
    ref: 'products',
    required: true,
  },
  reason: String,
  reviewFromBuyer: Schema.Types.ObjectId,
  reviewFromSeller: Schema.Types.ObjectId,
  seller: {
    type: Schema.Types.ObjectId,
    ref: 'users',
    required: true,
  },
  shippingProvider: {
    type: String,
    enum: ['novaposhta'],
  },
  shippingStatus: String,
  shippingUpdatedAt: Date,
  status: {
    type: String,
    required: true,
    default: 'pending',
    enum: [
      // Unpaid - Customer started the checkout process. Payment is not completed.
      'pending',

      // (1)
      // Buyer pays and waiting for seller to confirm – One quantity of the Product is now in carted array
      'paid',

      // (1)
      // Product is ready for shipment. Tracking number is generated automatically
      'confirmed',

      // (2)
      'shipped',

      // Seller cancels order. Requires reason.
      // or
      // Buyer cancels order (or doesn't pay in 15 mins). Reason if internal process (payment denied/timeout)
      'cancelled',

      // (2)
      'delivered',

      // (2)
      // Item has been collected
      'completed',

      // (1)
      // Buyer fails to collect
      // or
      // Buyer refuses the item (not as described)
      'failed_by_buyer',

      // (1) or Escrow Manager
      // Seller fails to ship
      // or
      // Seller doesn't confirm order
      'failed_by_seller',
    ],
  },
  trackingNumber: String,
  transactionId: String,
  transactionStatus: String,
  updatedAt: Date,
}, {
  timestamps: false,
});

module.exports = mongoose.model('orders', schema, 'orders');

