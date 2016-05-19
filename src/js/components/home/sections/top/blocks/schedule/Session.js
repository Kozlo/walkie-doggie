import React from "react";

export default class ScheduleSession extends React.Component {
    render() {
        const { title, time } = this.props;

        return (
            <div className="item">
                <div className="schedule-row row">
                    <div className="col-xs-6">
                        <h5 className="regular white">{title}</h5>
                    </div>
                    <div className="col-xs-6 text-right">
                        <h5 className="white">{time}</h5>
                    </div>
                </div>
            </div>
        );
    }
}