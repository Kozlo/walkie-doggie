import React from "react";

// import other modules
import SocialFooter from "./social/Footer";

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
                    <div className="row text-center-mobile">
                        <div className="col-sm-12">
                            <SocialFooter />
                        </div>
                    </div>
                    <div className="row text-center-mobile">
                        <div className="col-sm-12">
                            <p>
                                <span>&copy; 2016 All Rights Reserved.</span>
                                <span> | </span>
                                <span><a href="#">Terms & Conditions</a></span>
                                <span> | </span>
                                <span><a href="#">Privacy Policy</a></span>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}
