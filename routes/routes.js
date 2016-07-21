var passport = require('passport');
var Account = require('../models/account');

module.exports = function (app) {
    // account creation route
    app.post('/register', function(req, res) {
        const oData = JSON.parse(req.body);
        console.log(oData);

        // validate input
        if (!oData.email || !oData.password || !oData.firstName || !oData.lastName || !oData.phone) {
            console.warn("Not all mandatory fields are passed!");
            res.send({ error: true, message: "Not all mandatory field were passed!" });
            return;
        }

        console.log("Attempting to register new user: '" + oData.email + "'!");
        // Username is the password
        const oUserData = {
            username: oData.email,
            email: oData.email,
            firstName: oData.firstName,
            lastName: oData.lastName,
            phone: oData.phone
        };
        Account.register(new Account(oUserData), oData.password, function(err, account) {
            if (err) {
                console.error("Error registering user: ", err);
                // TODO: check if this is correct. might not be...
                res.json({
                    error: err
                });
                return;
            }
            console.log("New user created successfully: ", account);
            // TODO: figure out why this isn't working, getting error in response: answer: authenticate needs to be a get, not post
            //passport.authenticate('local')(req, res, function () {
                //console.log("User authenticated!");
                res.json({
                    message: "Account created successfully!",
                    success: true,
                    username: account.username
                });
            //});
        });
    });

    // login route
    // when using a local strategy it is required to use a GET and not a POST
    app.get('/login', function(req, res, next) {
        console.log("Attempting to log in...", next);
        passport.authenticate('local', function(err, user, info) {
            console.log("Authentiation callback started....");
            if (err) {
                console.error("Error occurred while authenticating: ", err);
                return next(err);
            }
            if (!user) {
                console.log("User wasn't found!");
                return res.json({
                    error: true,
                    message: "User wasn't found."
                });
            }
            req.logIn(user, function(err) {
                if (err) {
                    console.log("Error logging in user: ", err);
                    return next(err);
                }
                console.log("User '" + user.username + "' logged in successfully!");
                // TODO: once the profile page is done use it instead
                return res.redirect('/users/' + user.username);
/*                return res.json({
                    success: true,
                    message: "User '" + user.username + "' logged in successfully!"
                });*/
            });
        })(req, res, next);
    });

    // TODO: test if this works fine...
    // logout route
    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });
};