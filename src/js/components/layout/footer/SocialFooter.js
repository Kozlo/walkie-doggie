import React from "react";

export default class SocialFooter extends React.Component {
    renderSocialLink(oLink, iIndex) {
        return (
            <li key={iIndex}><a href={oLink.url} target="_blank"><i className={`fa ${oLink.className}`}></i></a></li>
        );
    }

    render() {
        const aLinks = [{
            url: "http://www.facebook.com/pages/Codrops/159107397912",
            className: "fa-facebook"
        }, {
            url: "http://www.twitter.com/codrops",
            className: "fa-twitter"
        }, {
            url: "https://plus.google.com/101095823814290637419",
            className: "fa-google-plus"
        }];

        return (
            <ul className="social-footer">
                {aLinks.map(this.renderSocialLink.bind(this))}
            </ul>
        );
    }
}