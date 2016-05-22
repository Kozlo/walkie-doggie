/* Brand and toggle get grouped for better mobile display */
import React from "react";

// import images
import LogoImg from "../../../../../libs/img/logo.png";
import LogoActiveImg from "../../../../../libs/img/logo-active.png";

export default class NavBarItemContainer extends React.Component {
    render() {
        return (
            <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="#"><img src={LogoImg} data-active-url={LogoActiveImg} alt="" /></a>
            </div>
        );
    }
}