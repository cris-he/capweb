var mongoose = require('mongoose');

var projectModel = mongoose.Schema({
    name: { type: String },
    owner: { type: String },
    magictoken: { type: Object },
    bio: { type: String },
    teams: { type: Array },
    likedby : {type: Array},
    size: { type: Number }
});

module.exports = mongoose.model('Project', projectModel);