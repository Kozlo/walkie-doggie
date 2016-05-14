import React from "react";

export default class ServicesSection extends React.Component {
    render() {
        return (
            <section id="services" className="section section-padded">
                <div className="container">
                    <div className="row text-center title">
                        <h2>Services</h2>
                        <h4 className="light muted">Achieve the best results with our wide variety of training options!</h4>
                    </div>
                    <div className="row services">
                        <div className="col-md-4">
                            <div className="service">
                                <div className="icon-holder">
                                    <img src="img/icons/heart-blue.png" alt="" className="icon" />
                                </div>
                                <h4 className="heading">Cardio Training</h4>
                                <p className="description">A elementum ligula lacus ac quam ultrices a scelerisque praesent vel suspendisse scelerisque a aenean hac montes.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="service">
                                <div className="icon-holder">
                                    <img src="img/icons/guru-blue.png" alt="" className="icon" />
                                </div>
                                <h4 className="heading">Yoga Pilates</h4>
                                <p className="description">A elementum ligula lacus ac quam ultrices a scelerisque praesent vel suspendisse scelerisque a aenean hac montes.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="service">
                                <div className="icon-holder">
                                    <img src="img/icons/weight-blue.png" alt="" className="icon" />
                                </div>
                                <h4 className="heading">Power Training</h4>
                                <p className="description">A elementum ligula lacus ac quam ultrices a scelerisque praesent vel suspendisse scelerisque a aenean hac montes.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cut cut-bottom"></div>
            </section>
        );
    }
}
