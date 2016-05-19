import React from "react";

// import other components
import NavBarLink from "./Link";

export default class NavBarItems extends React.Component {
    renderNavBarLink(link, index) {
        return (
            <NavBarLink
                key={`LayoutNavBarLink${index}`}
                url={link.url}
                dataToggle={link.dataToggle}
                datTarget={link.dataTarget}
                className={link.classNames}
                text={link.text} />
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
                    {aNavLinks.map(this.renderNavBarLink.bind(this))}
                </ul>
            </div>
        );
    }
}