/* Collect the nav links, forms, and other content for toggling  */
import React from "react";

// import other components
import NavBarItems from "./Items";

export default class NavBarItemContainer extends React.Component {
    render() {
        const sListClasses = "nav navbar-nav navbar-right main-nav";

        return (
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <NavBarItems lock={this.lock} ulClasses={sListClasses} />
                </div>
            </div>
        );
    }
}