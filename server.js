var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var session = require('express-session');

var config = require('./config/config');

var restrict = require('./middle-wares/restrict'),
    handle404MDW = require('./middle-wares/handle404');

var homeRouter = require('./routes/homeRouter');
var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.resolve(__dirname, 'public'), {
    maxage: config.maxage
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(session({
    key: config.sessionKey,
    secret: config.sesssionSecret,
    resave: false,
    saveUninitialized: false,
    expires: new Date(Date.now() + (30 * 86400 * 1000))
}));


app.get('/', (req, res) => {
    res.render('login');
});
app.get('/home',restrict, (req, res) => {
    res.render('home');
});

app.use('/h', homeRouter);

app.use(handle404MDW);

app.listen(config.port, () => {
    console.log('Site running on port ' + config.port);
});