var mongoose = require('mongoose');

var projectModel = mongoose.Schema({
    name: { type: String },
    owner: { type: Object },
    password: { type: String },
    bio: { type: String },
    teams: { type: Array },
    likedby : {type: Array},
    size: { type: Number },
    tags: { type: Array },
    comments: { type: Array },
    supervisors: { type: Array }
});

module.exports = mongoose.model('Project', projectModel);