// like.js
const mongoose = require('mongoose');

const likeSchema = new mongoose.Schema({
  like: {
    type: Number,
    default: 0
  },
  dislike: {
    type: Number,
    default: 0
  },
  userLiked: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  userDisliked: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});

const Like = mongoose.model('Like', likeSchema);

module.exports = Like;