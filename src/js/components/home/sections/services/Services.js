import React from "react";

//import images
import HeartBlueIconImg from "../../../../../../libs/img/icons/heart-blue.png";
import GuruBlueIconImg from "../../../../../../libs/img/icons/guru-blue.png";
import WeightBlueIconImg from "../../../../../../libs/img/icons/weight-blue.png";

// import components
import ServiceItem from "./Item";

export default class ServicesSection extends React.Component {
    render() {
        const oItem1 = {
            name: "Cardio Training",
            description: "A elementum ligula lacus ac quam ultrices a scelerisque praesent velsuspendisse scelerisque a aenean hac montes.",
            image: {
                url: HeartBlueIconImg,
                alt: "Cardio Training"
            }
        };
        const oItem2 = {
            name: "Yoga Pilates",
            description: "A elementum ligula lacus ac quam ultrices a scelerisque praesent velsuspendisse scelerisque a aenean hac montes.",
            image: {
                url: GuruBlueIconImg,
                alt: "Yoga Pilates"
            }
        };
        const oItem3 = {
            name: "Power Training",
            description: "A elementum ligula lacus ac quam ultrices a scelerisque praesent velsuspendisse scelerisque a aenean hac montes.",
            image: {
                url: WeightBlueIconImg,
                alt: "Power Training"
            }
        };

        return (
            <section id="services" className="section section-padded">
                <div className="container">
                    <div className="row text-center title">
                        <h2>Services</h2>
                        <h4 className="light muted">Achieve the best results with our wide variety of training options!</h4>
                    </div>
                    <div className="row services">
                        <div className="col-md-4">
                            <ServiceItem item={oItem1} />
                        </div>
                        <div className="col-md-4">
                            <ServiceItem item={oItem2} />
                        </div>
                        <div className="col-md-4">
                            <ServiceItem item={oItem3} />
                        </div>
                    </div>
                </div>
                <div className="cut cut-bottom"></div>
            </section>
        );
    }
}
