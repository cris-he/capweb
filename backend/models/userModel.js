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
    involve: { type: Object },
    interests : {type: Array},
    tags : {type: Array},
    size: { type: Number },
    status: { type: Number },
    exp : {type: Array},   
    likes : {type: Array},
    similar : {type: Array},
    projects : {type: Array},
    login : {type: Date},
    slogan : {type: String}
});

module.exports = mongoose.model('User', userModel);