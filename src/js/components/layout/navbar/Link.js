import React from "react";

export default class NavBarLink extends React.Component {

    render() {
        const { url, dataToggle, dataTarget, classNames, text } = this.props;

        return (
            <li><a href={url} data-toggle={dataToggle} data-target={dataTarget} className={classNames}>{text}</a></li>
        );
    }
}