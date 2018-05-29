var mongoose = require('mongoose');

var userModel = mongoose.Schema({
    username: { type: String },
    password: { type: String },
    first: { type: String },
    last: { type: String },
    bio: { type: String },
    role: { type: String },
    avatar: { type: String },
    team: { type: Object },
    invovle: { type: Object },
    interests : {type: Array},
    size: { type: Number },
    status: { type: Number },
    exp : {type: Array},   
    likedby : {type: Array},
    likes : {type: Array},
    similar : {type: Array},
    project : {type: Array}
});

module.exports = mongoose.model('User', userModel);