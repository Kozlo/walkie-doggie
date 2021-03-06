// import favicons
import "../../libs/img/favicons/apple-touch-icon-60x60.png";
import "../../libs/img/favicons/apple-touch-icon-57x57.png";
import "../../libs/img/favicons/favicon-32x32.png";
import "../../libs/img/favicons/favicon-16x16.png";

// import other files
import "../../libs/img/favicons/manifest.json";
import "../../libs/img/favicons/browserconfig.xml";

// import images
import "../../libs/img/dogs/retriever.jpeg";
import "../../libs/img/dogs/bulldog.jpg";

// import all css files
import "../../libs/css/normalize.css";
import "../../libs/css/bootstrap.css";
import "../../libs/css/owl.css";
import "../../libs/css/animate.css";
import "../../libs/fonts/font-awesome-4.1.0/css/font-awesome.min.css";
import "../../libs/fonts/eleganticons/et-icons.css";
import "../../libs/css/cardio.css";
import "../../libs/css/styles.css";

// import all js files
import "../../libs/js/jquery-1.11.1.min.js";
import "../../libs/js/owl.carousel.min.js";
import "../../libs/js/bootstrap.min.js";
import "../../libs/js/wow.min.js";
import "../../libs/js/typewriter.js";
import "../../libs/js/jquery.onepagenav.js";
import "../../libs/js/templateMain.js";

// import React libraries
import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

// import other components
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Profile from "./pages/Profile";
import Error from "./pages/Error";

const app = document.getElementById('app');

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={Home} />
            {/*TODO: figure out if it's needed to store the username/email in the link too*/}
            {/*TODO: there's a bug when going 'back' in Chrome from profile to home where the header and the non-mobiel navbar isn't loaded (just like it was on Heorku with the pre-loader*/}
            {/*<Route path="/profile" component={Profile}/>*/}
            <Route path="*" component={Error} />
        </Route>
    </Router>,
app);
