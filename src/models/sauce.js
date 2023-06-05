const mongoose = require('mongoose');

const sauceSchema = new mongoose.Schema({
    userId: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    manufacturer: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    mainPepper: {
      type: String,
      required: true
    },
    imageUrl: {
      type: String,
      required: true
    },
    heat: {
      type: Number,
      required: true,
      min: 1,
      max: 10
    },
    likes: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Like'
    }],
    dislikes: {
      type: Number,
      default: 0
    },
    usersLiked: {
      type: [String],
      default: []
    },
    usersDisliked: {
      type: [String],
      default: []
    }
  });
  
  const Sauce = mongoose.model('Sauce', sauceSchema);
  
  module.exports = Sauce;