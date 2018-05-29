var express = require('express'),
    bodyPaser = require('body-parser');

var router = express.Router();



var routes = function (Team) {
    router.route('/')
        .get(function (req, res) {
            Team.find(req.query, function (err, teams) {
                if (err)
                    console.log(err);
                res.send(teams);
            })
        })
    return router;
}

module.exports = routes;