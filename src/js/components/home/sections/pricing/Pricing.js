import React from "react";

//import images
import Pricing1Img from "../../../../../../libs/img/pricing1.jpg";
import Pricing2Img from "../../../../../../libs/img/pricing2.jpg";

//import components
import PricingItem from "./Item";

export default class PricingSection extends React.Component {
    render() {
        const oItem1 = {
            image: Pricing1Img,
            service: "Yoga Pilates",
            price: "$850",
            frequency: "year",
            specs: ["One Personal Trainer", "Big gym space for training", "Free tools & props", "Free locker", "Free before / after shower"]
        };
        const oItem2 = {
            image: Pricing2Img,
            service: "Cardio Training",
            price: "$100",
            frequency: "year",
            specs: ["One Personal Trainer", "Big gym space for training", "Free tools & props", "Free locker", "Free before / after shower"]
        };

        return (
            <section id="pricing" className="section">
                <div className="container">
                    <div className="row title text-center">
                        <h2 className="margin-top white">Pricing</h2>
                        <h4 className="light white">Choose your favorite pricing plan and sign up today!</h4>
                    </div>
                    <div className="row no-margin">
                        <div className="col-md-7 no-padding col-md-offset-5 pricings text-center">
                            <PricingItem
                                active={true}
                                image={oItem1.image}
                                service={oItem1.service}
                                price={oItem1.price}
                                frequency={oItem1.frequency}
                                specs={oItem1.specs} />

                            <PricingItem
                                active={false}
                                image={oItem2.image}
                                service={oItem2.service}
                                price={oItem2.price}
                                frequency={oItem2.frequency}
                                specs={oItem2.specs} />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
