var mongoose = require('mongoose');

var feedModel = mongoose.Schema({
    title: { type: String },
    content: { type: String },
    time: { type: Date }
});

module.exports = mongoose.model('Feed', feedModel);