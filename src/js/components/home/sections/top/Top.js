import React from "react";

import ScheduleContainer from "./blocks/schedule/container";
import MembershipContainer from "./blocks/membership/container";
import TestimonialsContainer from "./blocks/testimonials/container";

export default class TopSection extends React.Component {
    render() {
        return (
            <section>
                <div className="cut cut-top"></div>
                <div className="container">
                    <div className="row intro-tables">
                        <div className="col-md-4">
                            <ScheduleContainer />
                        </div>
                        <div className="col-md-4">
                            <MembershipContainer />
                        </div>
                        <div className="col-md-4">
                            <TestimonialsContainer />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
