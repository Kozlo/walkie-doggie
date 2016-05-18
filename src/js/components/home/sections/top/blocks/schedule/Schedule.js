import React from "react";

// import components
import ScheduleSession from "./Session";

export default class Schedule extends React.Component {
    renderScheduleSession(session, index) {
        return (
            <div key={index} className="item">
                <ScheduleSession
                    key={index}
                    time={session.title}
                    title={session.time} />
            </div>
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

        return (
            <div className="intro-table intro-table-first">
                <h5 className="white heading">Today's Schedule</h5>
                <div className="owl-carousel owl-schedule bottom">
                    {aSessions.map(this.renderScheduleSession.bind(this))}
                </div>
            </div>
        );
    }
}