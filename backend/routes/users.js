var express = require('express'), bodyPaser = require('body-parser');

var router = express.Router();



var routes = function(User) {

    // All Users
    router.route('/')
        .get(function(req, res) {
            User.find(req.query, function(err, users) {
            if (err) console.log(err);
            res.send(users);
            })
        })
        .post(function (req, res) {
            var __user = new User(req.body);
            __user.save();
            res.status(201).send(__user);
        });


    // // User By ID
    // router.use('/:id', function (req, res, next) {
    //     User.findById(req.params.id, function (err, user) {
    //         if (err)
    //             res.status(500).send(err);
    //         else if (user) {
    //             req.user = user;
    //             next();
    //         }
    //         else {
    //             res.status(404).send({ message: 'User ID Not Found' });
    //         }
    //     });
    // });
    router.route('/:id')
        .get(function(req, res) {
            console.log('find by id', req.user, req.params.id);
            User.findById(req.params.id, function (err, __user) {
                if(err) {
                    res.status(500).send(err);
                } else if (__user) {
                    res.status(201).send(__user);
                } else {
                    res.status(404).send({ message: 'User ID Not Found' });
                }
               
            });
        })
        .post(function(req, res){
            User.update({_id  : req.user._id}, {$set: req.body}, function(__err,__data){
                res.status(201).send(__data);
            });
        })


    router.route('/:id/likes')
        .get(function(req, res) {
            res.json(req.user);
        })
        .post(function(req, res){
            User.update({_id  : req.user._id}, {$set: req.body}, function(__err,__data){
                res.status(201).send(__data);
            });
        })







  return router;
}

module.exports = routes;