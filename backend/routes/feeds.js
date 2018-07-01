var express = require('express'), bodyPaser = require('body-parser');

var router = express.Router();


var routes = function(Feed) {
        router.route('/')
        .get(function(req, res) {
            Feed.find(req.query).sort('-time').exec(function(err, feeds) {
                if (err) console.log(err);
                 res.send(feeds);
                });
        })
        .post(function (req, res) {
            var __post = new Feed(req.body);
            __post.save();
            res.status(201).send(__post);
        });

        return router;
}

module.exports = routes;