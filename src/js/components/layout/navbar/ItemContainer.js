/* Collect the nav links, forms, and other content for toggling  */
import React from "react";

// import other components
import NavBarItems from "./Items";

export default class NavBarItemContainer extends React.Component {
    render() {
        return (
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <NavBarItems />
                </div>
            </div>
        );
    }
}