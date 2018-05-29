var mongoose = require('mongoose');

var teamModel = mongoose.Schema({
    name: { type: String },
    email: { type: String },
    magictoken: { type: Object },
    bio: { type: String },
    mates: { type: Array },
    invovle: { type: Object },
    likedby : {type: Array},
    interests : {type: Array},
    size: { type: Number },
    status: { type: Number }
});

module.exports = mongoose.model('Team', teamModel);