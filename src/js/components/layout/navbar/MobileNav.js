/* Holder for mobile navigation */
import React from "react";

// import other modules
import NavBarItems from "./Items";

export default class Nav extends React.Component {
    render() {
        const sListClasses="";

        return (
            <div className="mobile-nav">
                <NavBarItems ulClasses={sListClasses} />
                <a href="#" className="close-link"><i className="arrow_up"></i></a>
            </div>
        );
    }
}
