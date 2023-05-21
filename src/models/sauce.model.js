const mongoose = require('mongoose');
Schema = mongoose.Schema;

let sauce = new Schema({
    userId: {type: String},
    name: {type: String},
    manufacturer: {type: String},
    description: {type: String},
    mainPepper: {type: String},
    imageUrl: {type: String},
    heat: {type: Number},
    likes: {type: Number},
    dislikes: {type: Number},
    usersLiked: {type: Number},
    usersDisliked: {type: Number},
});

