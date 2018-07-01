var express = require('express'),
    bodyPaser = require('body-parser');

var router = express.Router();



var routes = function (Project) {

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
            __project.save();
            res.status(201).send(__project);
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


    return router;
}

module.exports = routes;