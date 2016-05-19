import React from "react";

export default class PricingItem extends React.Component {
    renderSpecs(spec, index) {
        return (
            <li key={`HomeSectionPricingItem${index}`}>{spec}</li>
        );
    }

    render() {
        const { active, image, service, price, frequency, specs } = this.props;
        const sMainBoxClasses = "box-main" + (active ? " active" : "");
        const sSecondBoxClasses = "box-second" + (active ? " active" : "");

        return (
            <div className="pricing">
                <div className={sMainBoxClasses} data-img={image}>
                    <h4 className="white">{service}</h4>
                    <h4 className="white regular light">{price} <span className="small-font">/ {frequency}</span></h4>
                    <a href="#" data-toggle="modal" data-target="#modal1" className="btn btn-white-fill">Sign Up Now</a>
                    <i className="info-icon icon_question"></i>
                </div>
                <div className={sSecondBoxClasses}>
                    <ul className="white-list text-left">
                        {specs.map(this.renderSpecs.bind(this))}
                    </ul>
                </div>
            </div>
        );
    }
}