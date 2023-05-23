const { Schema, model} = require('mongoose');

let sauceSchema = new Schema({
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

module.exports = model('Sauce', sauceSchema);