var express = require('express'),
    bodyPaser = require('body-parser');

var router = express.Router();



var routes = function (Team) {

    // All Teams
    router.route('/')
        .get(function(req, res) {
            Team.find(req.query, function(err, teams) {
            if (err) console.log(err);
            res.send(teams);
            })
        })
        .post(function (req, res) {
            var __team = new Team(req.body);
            __team.save();
            res.status(201).send(__team);
        });

    // All Teams
    router.route('/count')
        .get(function(req, res) {
            Team.find(req.query, function(err, teams) {
            if (err) console.log(err);
            res.send(teams.length + "");
            })
        });


    // Team By ID
    router.use('/:id', function (req, res, next) {
        Team.findById(req.params.id, function (err, team) {
            if (err)
                res.status(500).send(err);
            else if (team) {
                req.team = team;
                next();
            }
            else {
                res.status(404).send({ message: 'Team ID Not Found' });
            }
        });
    });
    router.route('/:id')
        .get(function(req, res) {
            res.json(req.team);
        })
        .post(function(req, res){
            Team.update({_id  : req.team._id}, {$set: req.body}, function(__err,__data){
                res.status(201).send(__data);
            });
        })

    router.route('/:id/comments')
        .post(function(req, res){
            req.body.date = new Date();
            console.log(req.body);
            Team.update({_id  : req.team._id}, {$set: req.body}, function(__err,__data){
                res.status(201).send(__data);
            });
        })


    return router;
}

module.exports = routes;