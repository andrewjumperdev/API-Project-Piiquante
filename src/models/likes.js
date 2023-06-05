const mongoose = require('mongoose');

const LikeSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
    required: true
  },
  fecha: {
    type: Date,
    default: Date.now
  }
});

const Like = mongoose.model('Like', LikeSchema);

module.exports = Like;