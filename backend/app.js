var express = require('express'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    cookieParser = require('cookie-parser'),
    session = require('express-session');

var app = express();
var port = process.env.PORT || 8000;

var db = mongoose.connect('mongodb://142.150.239.189:27017/capweb');

var Feed = require('./models/feedModel');
var User = require('./models/userModel');
var Team = require('./models/teamModel');
var Project = require('./models/projectModel');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cookieParser());
app.use(session({ secret: 'capweb' }));
require('./config/passport')(app, User);


adminRouter = require('./routes/admin')(User);
authRouter = require('./routes/auth')(User);


feedRouter = require('./routes/feeds')(Feed);
userRouter = require('./routes/users')(User, Team, Project);
teamRouter = require('./routes/teams')(User, Team, Project);
projectRouter = require('./routes/projects')(User, Team, Project);

app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', req.headers.origin);

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.use('/api/admin', adminRouter);
app.use('/api/feeds', feedRouter);
app.use('/api/auth', authRouter);
app.use('/api/users', userRouter);
app.use('/api/teams', teamRouter);
app.use('/api/projects', projectRouter);


app.get('/', function (req, res) {
    res.send("Hello Moto!");
})


app.listen(port, function (err) {
    console.log("Capweb Backend Running on Port " + port);
});