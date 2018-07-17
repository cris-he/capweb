var express = require('express'),
    bodyPaser = require('body-parser');

var router = express.Router();



var routes = function (User, Team, Project) {

    // All Projects
    router.route('/')
        .get(function(req, res) {
            Project.find(req.query, function(err, projects) {
            if (err) console.log(err);
            res.send(projects);
            })
        })
        .post(function (req, res) {
            var __project = new Project(req.body);
            __project.owner = req.user;
            if(req.user.role == "Professor") {
                __project.superviosrs.push(req.user);
            }
            __project.save();
            User.findById({_id:req.user._id}, function(err,__user){
                __user.projects.push(__project);
                __user.save();
                res.status(201).send(__project);
            })
        });

    // All Projects
    router.route('/count')
        .get(function(req, res) {
            Project.find(req.query, function(err, projects) {
            if (err) console.log(err);
            res.send(projects.length + "");
            })
        });


    // Project By ID
    router.use('/:id', function (req, res, next) {
        Project.findById(req.params.id, function (err, project) {
            if (err)
                res.status(500).send(err);
            else if (project) {
                req.project = project;
                next();
            }
            else {
                res.status(404).send({ message: 'Project ID Not Found' });
            }
        });
    });
    router.route('/:id')
        .get(function(req, res) {
            res.json(req.project);
        })
        .post(function(req, res){
            Project.update({_id  : req.project._id}, {$set: req.body}, function(__err,__data){
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
            Project.findOneAndUpdate(
                {_id  : req.project._id},
                {$push: {'comments':req.body}},
                {new: true},
                function(__err,__data){
                    // __data.comments.sort('-time');
                    res.status(201).send(__data.comments);
            });
        })


    return router;
}

module.exports = routes;