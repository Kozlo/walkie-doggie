import React from "react";

// import other modules
import Schedule from "./blocks/schedule/Schedule";
import Membership from "./blocks/membership/Membership";
import Testimonials from "./blocks/testimonials/Testimonials";

export default class TopSection extends React.Component {
    render() {
        const oStyle = { opacity: 0 };

        return (
            <section>
                <div className="cut cut-top"></div>
                <div className="container">
                    <div className="row intro-tables" style={oStyle}>
                        <div className="col-md-4">
                            <Schedule />
                        </div>
                        <div className="col-md-4">
                            <Membership />
                        </div>
                        <div className="col-md-4">
                            <Testimonials />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
