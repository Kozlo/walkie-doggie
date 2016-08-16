/* Holder for mobile navigation */
import React from "react";

// import other modules
import NavBarItems from "./Items";

export default class Nav extends React.Component {

    componentWillMount() {
        // TODO: move this elsewhere
        this.lock = new Auth0Lock('t48Z83ky2Kvi1NyuAA9j1Uop3pDi3b9n', 'kozlo.eu.auth0.com');
    }

    render() {
        const sListClasses="";

        return (
            <div className="mobile-nav">
                <NavBarItems lock={this.lock} ulClasses={sListClasses} />
                <a href="#" className="close-link"><i className="arrow_up"></i></a>
            </div>
        );
    }
}
