var mongoose = require('mongoose');

var projectModel = mongoose.Schema({
    name: { type: String },
    owner: { type: Object },
    magictoken: { type: Object },
    bio: { type: String },
    teams: { type: Array },
    likedby : {type: Array},
    size: { type: Number },
    tags: { type: Array }
});

module.exports = mongoose.model('Project', projectModel);