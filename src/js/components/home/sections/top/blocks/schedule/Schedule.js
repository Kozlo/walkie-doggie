import React from "react";

// import components
import ScheduleItem from "./Item";

export default class Schedule extends React.Component {
    renderScheduleItem(sessions, index) {
        return (
            <ScheduleItem
                key={`HomeSectionTopScheduleItem${index}`}
                sessions={sessions} />
        );
    }

    render() {
        const aSessions = [{
            title: "Early Exercise",
            time: "8:30 - 10:00"
        }, {
            title: "Muscle Building",
            time: "8:30 - 10:00"
        }, {
            title: "Cardio",
            time: "8:30 - 10:00"
        }];
        const aItems = [aSessions, aSessions, aSessions];

        return (
            <div className="intro-table intro-table-first">
                <h5 className="white heading">Today's Schedule</h5>
                <div className="owl-carousel owl-schedule bottom">
                    {aItems.map(this.renderScheduleItem.bind(this))}
                </div>
            </div>
        );
    }
}