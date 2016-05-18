import React from "react";

// import other modules
import OpeningHours from "./OpeningHours";
import SocialFooter from "./SocialFooter";

export default class Footer extends React.Component {
    render() {
        const oWeekdays = {
            days: "Mon - Fri",
            hours: "9:00 - 22:00"
        };
        const oWeekends = {
            days: "Sat - Sun",
            hours: "10:00 - 18:00"
        };

        return (
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 text-center-mobile">
                            <h3 className="white">Reserve a Free Trial Class!</h3>
                            <h5 className="light regular light-white">Shape your body and improve your health.</h5>
                            <a href="#" className="btn btn-blue ripple trial-button">Start Free Trial</a>
                        </div>
                        <div className="col-sm-6 text-center-mobile">
                            <h3 className="white">Opening Hours <span className="open-blink"></span></h3>
                            <div className="row opening-hours">
                                <div className="col-sm-6">
                                    <OpeningHours days={oWeekdays.days} hours={oWeekdays.hours} />
                                </div>
                                <div className="col-sm-6 text-center-mobile">
                                    <OpeningHours days={oWeekends.days} hours={oWeekends.hours} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row bottom-footer text-center-mobile">
                        <div className="col-sm-8">
                            <p>&copy; 2015 All Rights Reserved. Powered by <a href="http://www.phir.co/">PHIr</a> exclusively for <a href="http://tympanus.net/codrops/">Codrops</a></p>
                        </div>
                        <div className="col-sm-4 text-right text-center-mobile">
                            <SocialFooter />
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}
