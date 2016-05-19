import React from "react";

// import other modules
import NavBarItems from "./Items";

// import images
import LogoImg from "../../../../../libs/img/logo.png";
import LogoActiveImg from "../../../../../libs/img/logo-active.png";

export default class Nav extends React.Component {
    render() {
        const { navClass, navStyle } = this.props;

        return (
            <nav className={`navbar ${navClass}`} style={navStyle}>
                <div className="container">
                    {/* Brand and toggle get grouped for better mobile display */}
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="#"><img src={LogoImg} data-active-url={LogoActiveImg} alt="" /></a>
                    </div>
                    {/* Collect the nav links, forms, and other content for toggling  */}
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <NavBarItems />
                    </div>
                    {/* /.navbar-collapse */ }
                </div>
                {/* /.container-fluid */}
            </nav>
        );
    }
}
