var express = require('express');
var path = require("path");
var bodyParser = require("body-parser");
var app = express();
//var keys = require('./keys.js');
//const apiRoutes = require("./routes/apiRoutes");

var db = require("./models");
var Sequelize = require('sequelize');

var JAWSDB_URL = ('mysql: enter link to jawsdb_url from heroku');

//login passport
var flash = require('connect-flash');
var crypto = require('crypto');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var sess = require('express-session');
var Store = require('express-session').Store;
var BetterMemoryStore = require(__dirname + '/memory');
var store = new BetterMemoryStore({ expires: 60 * 60 * 1000, debug: true });

var app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.use(bodyParser.json());

//app.use(express.static('public')); set this in app.use setting with dir path

//session store
app.use(sess({
    name: 'JSESSION',
    secret: 'MYSECRETISVERYSECRET',
    store: store,
    resave: true,
    saveUninitialized: true
}));

//app.use(logger('dev'));
//app.use(cookieParser());

var PORT = process.env.PORT || 8080;

// error handling
app.use(function(err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Something broke!')
});

//passport session 
passport.use('local', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true //passback entire req to call back
}, function(req, username, password, done) {
    console.log(username + ' = ' + password);
    if (!username || !password) { return done(null, false, req.flash('message', 'Username and Password are both required')); }
    var salt = '7fa73b47df808d36c5fe328546ddef8b9011b2c6';
    db.User.findAll({ where: { "username": username } }).then(
        function(rows, err) {

            if (err) return done(req.flash('message', err));

            if (!rows.length) { return done(null, false, req.flash('message', 'Invalid username or password.')); }
            salt = salt + '' + password;
            var encPassword = crypto.createHash('sha1').update(salt).digest('hex');
            var dbPassword = rows[0].password;

            if (!(dbPassword == encPassword)) {
                return done(null, false, req.flash('message', 'Invalid username or password.'));
            }
            req.session.user = rows[0];
            return done(null, rows[0]);
        });
}));

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    db.User.findAll({ where: { id: id } }).then(
        function(rows, err) {
            done(err, rows[0]);
        });
});
//app.use("/api", apiRoutes);

app.use("/shopify", require("./routes/shopify-router.js"));
app.use("/db", require("./routes/db-router.js"));
app.use("/",require("./routes/router.js"));
app.use("/order",require("./routes/order-route.js"));
app.use("/orderitem",require("./routes/order_item-route.js"));
app.use("/inventory",require("./routes/inventory-route.js"));
app.use("/vendor",require("./routes/vendor-route.js"));
app.use("/", express.static(__dirname+"/public"));

app.get("*", function(req, res){
	res.sendFile(path.join(_dirname, "./client/build/index.html"));
});

//don't need these with app.use requires
// require("./routes/order-route.js")(app);
// require("./routes/order_item-route.js")(app);
// require("./routes/inventory-route.js")(app);
// require("./routes/vendor-route.js")(app);

db.sequelize.sync().then(function()
	{
	app.listen(PORT, () => {
		app.set("db", db)
		console.log('Example app listening on port '+PORT);
	});
});