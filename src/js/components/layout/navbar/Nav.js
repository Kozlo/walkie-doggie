import React from "react";

// import other modules
import NavBarHeader from "./Header";
import NavBarItemContainer from "./ItemContainer";

export default class Nav extends React.Component {
    render() {
        const { navClass, navStyle } = this.props;

        return (
            <nav className={`navbar ${navClass}`} style={navStyle}>
                <div className="container">
                    <NavBarHeader />
                    <NavBarItemContainer />
                </div>
            </nav>
        );
    }
}
