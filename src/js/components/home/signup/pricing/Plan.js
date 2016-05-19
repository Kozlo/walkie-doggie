import React from "react";

// import all components
import PricingOption from "./Option"

export default class PricingPlan extends React.Component {
    renderPricingOption(opt, index) {
        return(
            <PricingOption
                key={`HomeSignUpPricingPlan${index}`}
                description={opt.description}
                price={opt.price}
                url={opt.url} />
        )
    }

    render() {
        const aOpts = [{
            description: "1 month membership",
            price: "150$",
            url: "#"
        }, {
            description: "3 month membership",
            price: "350$",
            url: "#"
        }, {
            description: "1 year membership",
            price: "1000$",
            url: "#"
        }, {
            description: "Free trial class",
            price: null,
            url: "#"
        }];

        return (
            <div className="dropdown">
                <button id="dLabel" className="form-control form-white dropdown" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Pricing Plan
                </button>
                <ul className="dropdown-menu animated fadeIn" role="menu" aria-labelledby="dLabel">
                    {aOpts.map(this.renderPricingOption.bind(this))}
                </ul>
            </div>
        );
    }
}
