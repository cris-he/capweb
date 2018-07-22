var express = require('express'),
    bodyPaser = require('body-parser');

var router = express.Router();



var routes = function (User, Team, Project) {

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
            __team.owner = req.user;
            __team.mates.push(req.user);
            __team.status = 25;
            __team.save();
            User.findById({_id:req.user._id}, function(err, __user){
                __user.team = __team;
                __user.save();
                res.status(201).send(__team);
            });
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
            req.body.owner = {
                _id:req.user._id,
                first:req.user.first,
                last:req.user.last,
                avatar:req.user.avatar
            };
            req.body.time = new Date();
            req.team.comments.push(req.body);
            req.team.save();
            res.status(201).send(req.team.comments);
        })


    router.route('/:id/join')
        .post(function(req, res){
            if(req.user.team) {
                res.status(400).send('You are already in a team.');
            } else if(req.team.mates.length >= req.team.size) {
                res.status(400).send('This team is full.');
            } else {
                if(req.team.password != req.body.password) {
                    res.status(403).send('Wrong password.');
                } else {

                    req.team.mates.push(req.user);
                    req.team.save().then(function(){
                        User.findById(req.user._id, function(err, __user){
                            console.log(typeof __user);
                            __user.team = req.team;
                            __user.save();
                            // req.team.mates.push(__user);
                            // req.team.save();
                            res.status(201).send('You joined this team.');
                        });
                    });

                }
            }

        })


    router.route('/:id/leave')
        .post(function(req, res){
            if(!req.user.team) {
                console.log('leave1');
                res.status(400).send('You are alone.');
            } else {
                if(req.user.password != req.body.password) {
                    console.log('leave2');
                    res.status(403).send('Wrong password.');
                } else {
                    console.log('leave3');
                    req.team.mates = req.team.mates.filter(function(m){
                        return m._id !== req.user._id;
                    });
                    req.team.save().then(function(){
                        User.findById(req.user._id, function(err, __user){
                            __user.team = "";
                            __user.save();
                            // req.team.mates.push(__user);
                            // req.team.save();
                            res.status(201).send('You left this team.');
                        });
                    });
                }
            }

        })

    return router;
}

module.exports = routes;