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
                dataTarget={link.dataTarget}
                classNames={link.classNames}
                text={link.text} />
        );
    }

    render() {
        const { ulClasses } = this.props;

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
            text: "Log In",
            dataToggle: "modal",
            dataTarget: "#logInModal"
        }, {
            url: "#",
            text: "Sign Up",
            dataToggle: "modal",
            dataTarget: "#signUpModal",
            classNames: "btn btn-sm btn-blue"
        }];

        return (
            <ul className={ulClasses}>
                {aNavLinks.map(this.renderNavBarLink.bind(this))}
            </ul>
        );
    }
}