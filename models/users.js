const mongoose = require('mongoose');

const { Schema } = mongoose;

const schema = new Schema({
  accountStatus: {
    type: String,
    required: true,
    default: 'notverified',
    enum: ['verified', 'notverified', 'banned', 'deleted'],
  },
  bio: String,
  deletedAt: Date,
  displayName: String,
  emailAddress: String,
  followersCount: Number,
  followingCount: Number,
  generatedAt: Date,
  mobileNumber: String,
  // password: String,
  platform: String,
  // paymentInfo
  profilePic: String,
  pushToken: String,
  ratingsTotal: Number,
  reviewsCount: Number,
  sharedCount: Number,
  scraping: {
    instagram: String,
    enabled: Boolean,
    preferredCategoryId: Number,
  },
  shippingAddress: {
    firstName: String,
    lastName: String,
    city: String,
    departmentNovaposhta: String,
  },
  username: String,
  types: {
    type: String, enum: ['designer', 'admin', 'reseller'],
    default: ['designer'],
    // required: true,
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('users', schema, 'users');

