const mongoose = require('mongoose');

const { Schema } = mongoose;

const schema = new Schema({
  'accountStatus': String,
  'bio': String,
  'buyerType': String,
  'createdAt': Date,
  'displayName': String,
  'emailAddress': String,
  'followersCount': Number,
  'followingCount': Number,
  generatedAt: Date,
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
  types: {
    type: [{ type: String }],
    default: ['designer'],
    // required: true,
  },
}, {
  timestamps: false,
});

module.exports = mongoose.model('users', schema, 'users');

