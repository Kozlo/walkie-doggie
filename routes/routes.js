var passport = require('passport');
var Account = require('../models/account');

module.exports = function (app) {

    // TODO: remove later
//    app.get('/', function (req, res) {
//        res.render('index', { user : req.user });
//    });

    // TODO: probably remove this as the register form is in a popup, not a page
//    app.get('/register', function(req, res) {
//        res.render('register', { });
//    });

    app.post('/register', function(req, res) {
        console.log("Attempting to register new user: '" + req.body.username + "'!");
        Account.register(new Account({ username : req.body.username }), req.body.password, function(err, account) {
            if (err) {
                console.error("Error registering user.");
                return res.render('register', { account : account });
            }
            console.log("New user '" + req.body.username + "' created successfully!");
            passport.authenticate('local')(req, res, function () {
                res.redirect('/');
            });
        });
    });

    // TODO: probably remove this as the login form is in a popup, not a page.
//    app.get('/login', function(req, res) {
//        res.render('login', { user : req.user });
//    });

    app.post('/login', passport.authenticate('local'), function(req, res) {
        res.redirect('/');
    });

    // TODO: test if this works fine...
    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });
};