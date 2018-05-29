var express = require('express'),
    bodyPaser = require('body-parser');

var router = express.Router();



var routes = function (Project) {
    router.route('/')
        .get(function (req, res) {
            Project.find(req.query, function (err, projects) {
                if (err)
                    console.log(err);
                res.send(projects);
            })
        })
    return router;
}

module.exports = routes;