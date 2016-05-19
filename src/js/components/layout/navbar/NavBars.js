import React from "react";

// import other components
import Nav from "./Nav";

export default class NavBars extends React.Component {
    render() {
        const oNav = {
            navClass: "original",
            navStyle: {}
        };
        const oNavFixed = {
            navClass: "navbar-fixed-top",
            navStyle: {
                position: "fixed",
                top: 0,
                marginTop: 0
            }
        };

        return (
            <div>
                <Nav navClass={oNav.navClass} navStyle={oNav.navStyle} />

                <Nav navClass={oNavFixed.navClass} navStyle={oNavFixed.navStyle} />
            </div>
        );
    }
}