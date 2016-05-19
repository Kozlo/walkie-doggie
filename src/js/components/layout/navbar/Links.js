import React from "react";

export default class NavbarLinks extends React.Component {
    renderNavLink(link, index) {
        return (
            <li key={`LayoutNavBarLinks${index}`}>
                <a href={link.url}
                   data-toggle={link.dataToggle}
                   data-target={link.dataTarget}
                   className={link.classNames}>
                    {link.text}
                </a>
            </li>
        );
    }

    render() {
        const aNavLinks = [{
            url: "#intro",
            text: "Intro"
        }, {
            url: "#services",
            text: "Services"
        }, {
            url: "#team",
            text: "Team"
        }, {
            url: "#pricing",
            text: "Pricing"
        }, {
            url: "#",
            text: "Sign Up",
            dataToggle: "modal",
            dataTarget: "#modal1",
            classNames: "btn btn-blue"
        }];

        return (
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav navbar-right main-nav">
                    {aNavLinks.map(this.renderNavLink.bind(this))}
                </ul>
            </div>
        );
    }
}