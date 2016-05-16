import React from "react";

// import components
import ItemSession from "./session";

export default class ScheduleItem extends React.Component {
    render() {
        const oSession1 = {
            title: "Early Exercise",
            time: "8:30 - 10:00"
        };
        const oSession2 = {
            title: "Muscle Building",
            time: "8:30 - 10:00"
        };
        const oSession3 = {
            title: "Cardio",
            time: "8:30 - 10:00"
        };

        return (
            <div className="item">
                <ItemSession time={oSession1.title} title={oSession1.time} />

                <ItemSession time={oSession2.title} title={oSession2.time} />

                <ItemSession time={oSession3.title} title={oSession3.time} />
            </div>
        );
    }
}