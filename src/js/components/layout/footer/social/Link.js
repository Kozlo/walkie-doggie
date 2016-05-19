import React from "react";

export default class SocialFooterLink extends React.Component {
    render() {
        const { url, className } = this.props;

        return (
            <li><a href={url} target="_blank"><i className={`fa ${className}`}></i></a></li>
        );
    }
}