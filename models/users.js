const mongoose = require('mongoose');

const schema = mongoose.Schema({
  'accountStatus': String,
  'bio': String,
  'buyerType': String,
  'createdAt': Date,
  'displayName': String,
  'emailAddress': String,
  'followersCount': Number,
  'followingCount': Number,
  'mobileNumber': String,
  'password': String,
  'platform': String,
  'profilePic': String,
  'pushToken': String,
  'ratingsTotal': Number,
  'reviewsCount': Number,
  'sharedCount': Number,
  'updatedAt': Date,
  'username': String,
}, {
  timestamps: false,
});

module.exports = mongoose.model('users', schema, 'users');

