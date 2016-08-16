/* Collect the nav links, forms, and other content for toggling  */
import React from "react";

// import other components
import NavBarItems from "./Items";

export default class NavBarItemContainer extends React.Component {

    componentWillMount() {
        // TODO: move this elsewhere
        this.lock = new Auth0Lock('t48Z83ky2Kvi1NyuAA9j1Uop3pDi3b9n', 'kozlo.eu.auth0.com');
    }

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