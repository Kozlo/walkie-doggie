import React from "react";

export default class TopSection extends React.Component {
    render() {
        return (
            <section>
                <div className="cut cut-top"></div>
                <div className="container">
                    <div className="row intro-tables">
                        <div className="col-md-4">
                            <div className="intro-table intro-table-first">
                                <h5 className="white heading">Today's Schedule</h5>
                                <div className="owl-carousel owl-schedule bottom">
                                    <div className="item">
                                        <div className="schedule-row row">
                                            <div className="col-xs-6">
                                                <h5 className="regular white">Early Exercise</h5>
                                            </div>
                                            <div className="col-xs-6 text-right">
                                                <h5 className="white">8:30 - 10:00</h5>
                                            </div>
                                        </div>
                                        <div className="schedule-row row">
                                            <div className="col-xs-6">
                                                <h5 className="regular white">Muscle Building</h5>
                                            </div>
                                            <div className="col-xs-6 text-right">
                                                <h5 className="white">8:30 - 10:00</h5>
                                            </div>
                                        </div>
                                        <div className="schedule-row row">
                                            <div className="col-xs-6">
                                                <h5 className="regular white">Cardio</h5>
                                            </div>
                                            <div className="col-xs-6 text-right">
                                                <h5 className="white">8:30 - 10:00</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="schedule-row row">
                                            <div className="col-xs-6">
                                                <h5 className="regular white">Early Exercise</h5>
                                            </div>
                                            <div className="col-xs-6 text-right">
                                                <h5 className="white">8:30 - 10:00</h5>
                                            </div>
                                        </div>
                                        <div className="schedule-row row">
                                            <div className="col-xs-6">
                                                <h5 className="regular white">Muscle Building</h5>
                                            </div>
                                            <div className="col-xs-6 text-right">
                                                <h5 className="white">8:30 - 10:00</h5>
                                            </div>
                                        </div>
                                        <div className="schedule-row row">
                                            <div className="col-xs-6">
                                                <h5 className="regular white">Cardio</h5>
                                            </div>
                                            <div className="col-xs-6 text-right">
                                                <h5 className="white">8:30 - 10:00</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="schedule-row row">
                                            <div className="col-xs-6">
                                                <h5 className="regular white">Early Exercise</h5>
                                            </div>
                                            <div className="col-xs-6 text-right">
                                                <h5 className="white">8:30 - 10:00</h5>
                                            </div>
                                        </div>
                                        <div className="schedule-row row">
                                            <div className="col-xs-6">
                                                <h5 className="regular white">Muscle Building</h5>
                                            </div>
                                            <div className="col-xs-6 text-right">
                                                <h5 className="white">8:30 - 10:00</h5>
                                            </div>
                                        </div>
                                        <div className="schedule-row row">
                                            <div className="col-xs-6">
                                                <h5 className="regular white">Cardio</h5>
                                            </div>
                                            <div className="col-xs-6 text-right">
                                                <h5 className="white">8:30 - 10:00</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="intro-table intro-table-hover">
                                <h5 className="white heading hide-hover">Premium Membership</h5>
                                <div className="bottom">
                                    <h4 className="white heading small-heading no-margin regular">Register Today</h4>
                                    <h4 className="white heading small-pt">20% Discount</h4>
                                    <a href="#" className="btn btn-white-fill expand">Register</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="intro-table intro-table-third">
                                <h5 className="white heading">Happy Clients</h5>
                                <div className="owl-testimonials bottom">
                                    <div className="item">
                                        <h4 className="white heading content">I couldn't be more happy with the results!</h4>
                                        <h5 className="white heading light author">Adam Jordan</h5>
                                    </div>
                                    <div className="item">
                                        <h4 className="white heading content">I can't believe how much better I feel!</h4>
                                        <h5 className="white heading light author">Greg Pardon</h5>
                                    </div>
                                    <div className="item">
                                        <h4 className="white heading content">Incredible transformation and I feel so healthy!</h4>
                                        <h5 className="white heading light author">Christina Goldman</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
