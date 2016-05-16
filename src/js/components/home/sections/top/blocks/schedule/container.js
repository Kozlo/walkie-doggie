import React from "react";

import ScheduleItem from "./item";

export default class ScheduleContainer extends React.Component {
    render() {
        return (
            <div className="intro-table intro-table-first">
                <h5 className="white heading">Today's Schedule</h5>
                <div className="owl-carousel owl-schedule bottom">
                    <ScheduleItem />

                    <ScheduleItem />

                    <ScheduleItem />
                </div>
            </div>
        );
    }
}