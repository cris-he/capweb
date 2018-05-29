var express = require('express'),
    bodyPaser = require('body-parser');

var router = express.Router();



var routes = function (User) {
    router.route('/')
        .get(function (req, res) {
            User.find(req.query, function (err, users) {
                if (err)
                    console.log(err);
                res.send(users);
            })
        })
    return router;
}

module.exports = routes;