// import css files from css folder
import "../../libs/css/animate.css";
import "../../libs/css/bootstrap.css";
import "../../libs/css/cardio.css";
import "../../libs/css/et-icons.css";
import "../../libs/css/normalize.css";
import "../../libs/css/owl.css";

// import css files from fonts folder
import "../../libs/fonts/eleganticons/et-icons.css";
import "../../libs/fonts/font-awesome-4.1.0/css/font-awesome.min.css";

// import all js files
import "../../libs/js/jquery-1.11.1.min.js";
import "../../libs/js/owl.carousel.min.js";
import "../../libs/js/bootstrap.min.js";
import "../../libs/js/wow.min.js";
import "../../libs/js/typewriter.js";
import "../../libs/js/jquery.onepagenav.js";
import "../../libs/js/templateMain.js";
/*import "./template/tooltip.js";
import "./template/typed.js";*/

// import favicons
import "../../libs/img/favicons/apple-touch-icon-60x60.png";
import "../../libs/img/favicons/apple-touch-icon-57x57.png";
import "../../libs/img/favicons/favicon-32x32.png";
import "../../libs/img/favicons/favicon-16x16.png";

// import other files
import "../../libs/img/favicons/browserconfig.xml";

// import React libraries
import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

// import custom React components
import Home from "./pages/Home";
import Layout from "./pages/Layout";

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Home}></IndexRoute>
    </Route>
  </Router>,
app);
