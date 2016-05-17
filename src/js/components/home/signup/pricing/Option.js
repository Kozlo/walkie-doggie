import React from "react";

export default class PricingOption extends React.Component {
    render() {
        const { description, price, url } = this.props;
        /*TODO: replace the below with ES6 type of strings with variables */
        const sText = description + (price ? ("(" + price + ")") : "");
        
        return (
            <li className="animated lightSpeedIn"><a href={url}>{sText}</a></li>
        );
    }
}


