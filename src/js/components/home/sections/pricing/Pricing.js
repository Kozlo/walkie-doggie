import React from "react";

import Pricing1Img from "../../../../../../libs/img/pricing1.jpg";
import Pricing2Img from "../../../../../../libs/img/pricing2.jpg";

export default class PricingSection extends React.Component {
    render() {
        return (
            <section id="pricing" className="section">
                <div className="container">
                    <div className="row title text-center">
                        <h2 className="margin-top white">Pricing</h2>
                        <h4 className="light white">Choose your favorite pricing plan and sign up today!</h4>
                    </div>
                    <div className="row no-margin">
                        <div className="col-md-7 no-padding col-md-offset-5 pricings text-center">
                            <div className="pricing">
                                <div className="box-main active" data-img={Pricing1Img}>
                                    <h4 className="white">Yoga Pilates</h4>
                                    <h4 className="white regular light">$850.00 <span className="small-font">/ year</span></h4>
                                    <a href="#" data-toggle="modal" data-target="#modal1" className="btn btn-white-fill">Sign Up Now</a>
                                    <i className="info-icon icon_question"></i>
                                </div>
                                <div className="box-second active">
                                    <ul className="white-list text-left">
                                        <li>One Personal Trainer</li>
                                        <li>Big gym space for training</li>
                                        <li>Free tools &amp; props</li>
                                        <li>Free locker</li>
                                        <li>Free before / after shower</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="pricing">
                                <div className="box-main" data-img={Pricing2Img}>
                                    <h4 className="white">Cardio Training</h4>
                                    <h4 className="white regular light">$100.00 <span className="small-font">/ year</span></h4>
                                    <a href="#" data-toggle="modal" data-target="#modal1" className="btn btn-white-fill">Sign Up Now</a>
                                    <i className="info-icon icon_question"></i>
                                </div>
                                <div className="box-second">
                                    <ul className="white-list text-left">
                                        <li>One Personal Trainer</li>
                                        <li>Big gym space for training</li>
                                        <li>Free tools &amp; props</li>
                                        <li>Free locker</li>
                                        <li>Free before / after shower</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
