import React from "react";

// import all components
import PricingOption from "./Option"

export default class PricingPlan extends React.Component {
    render() {
        const oOpt1 = {
            description: "1 month membership",
            price: "150$",
            url: "#"
        };

        const oOpt2 = {
            description: "3 month membership",
            price: "350$",
            url: "#"
        };

        const oOpt3 = {
            description: "1 year membership",
            price: "1000$",
            url: "#"
        };

        const oOpt4 = {
            description: "Free trial class",
            price: null,
            url: "#"
        };
        
        return (
            <div className="dropdown">
                <button id="dLabel" className="form-control form-white dropdown" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Pricing Plan
                </button>
                <ul className="dropdown-menu animated fadeIn" role="menu" aria-labelledby="dLabel">
                    <PricingOption description={oOpt1.description} price={oOpt1.price} url={oOpt1.url} />

                    <PricingOption description={oOpt2.description} price={oOpt2.price} url={oOpt2.url} />

                    <PricingOption description={oOpt3.description} price={oOpt4.price} url={oOpt3.url} />

                    <PricingOption description={oOpt4.description} price={oOpt4.price} url={oOpt4.url} />
                </ul>
            </div>
        );
    }
}
