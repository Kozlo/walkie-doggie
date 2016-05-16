import React from "react";

export default class ScheduleItem extends React.Component {
    render() {
        return (
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
        );
    }
}