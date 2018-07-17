var mongoose = require('mongoose');

var teamModel = mongoose.Schema({
    name: { type: String },
    email: { type: String },
    password: { type: String },
    owner: { type: Object },
    bio: { type: String },
    mates: { type: Array },
    invovle: { type: Object },
    likedby : {type: Array},
    tags : {type: Array},
    size: { type: Number },
    status: { type: Number },
    comments: { type: Array }
});

module.exports = mongoose.model('Team', teamModel);