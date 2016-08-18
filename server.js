/* eslint no-console: 0 */

// dependencies
const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./webpack.config.js');
const bodyParser = require('body-parser');

// this is Auth0-related
const jwt = require('express-jwt');
const cors = require('cors');

// app
const isDeveloping = process.env.NODE_ENV !== 'production';
const port = isDeveloping ? 3000 : process.env.PORT;
const app = express();

// database
const db = require('./config/db');
const mongoose = require('mongoose');

// TODO: check what this is doing (Auth0-related)
app.use(cors());
// needed, otherwise body from post requests cannot be read
app.use(bodyParser.text({
    type: 'text/plain'
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Authentication middleware provided by express-jwt.
// This middleware will check incoming requests for a valid
// JWT on any routes that it is applied to.
// TODO: replace the strings with references to environmental vars
const authCheck = jwt({
    secret: new Buffer('z4b9s5erPJsHkflIvoDDVnRkBUAG8fdXObt1Mix0eZElSvP3GAd0Wc36lsCth-tR', 'base64'),
    audience: 't48Z83ky2Kvi1NyuAA9j1Uop3pDi3b9n'
});

// routes
require('./routes/routes')(app);

// this is a test route
// TODO: remove when done testing
app.get('/testAuth', authCheck, (req, res) => {
    console.log("Retrieving auth test...");
    res.json({ success: true});
});

if (isDeveloping) {
    const compiler = webpack(config);
    const middleware = webpackMiddleware(compiler, {
        publicPath: config.output.publicPath,
        contentBase: 'src',
        stats: {
            colors: true,
            hash: false,
            timings: true,
            chunks: false,
            chunkModules: false,
            modules: false
        }
    });

    app.use(middleware);
    app.use(webpackHotMiddleware(compiler));
    app.get('*', function response(req, res) {
        res.write(middleware.fileSystem.readFileSync(path.join(__dirname, 'dist/index.html')));
        res.end();
    });
} else {
    app.use(express.static(__dirname + '/dist'));
    app.get('*', function response(req, res) {
        res.sendFile(path.join(__dirname, 'dist/index.html'));
    });
}

// connect to our mongoDB database
mongoose.connect(db.url, function(err) {
    if (err) {
        return;
    }

    console.log("Successfully connected to the DB: " + db.url);
});

app.listen(port, function onStart(err) {
    if (err) {
        console.log("Successfully connected to the DB: " + db.url, err);
        console.log(err);
    }
    console.info('==> 🌎 Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port);
});
