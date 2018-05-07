var express = require('express'),
    path = require('path');

var app = express();
var rootPath = path.normalize(__dirname);
var port = process.env.PORT || 3000;

app.use(express.static(rootPath));

app.listen(port, function (err) {
    console.log("Capweb Frontend Running on Port " + port);
});