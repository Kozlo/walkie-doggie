import React from "react";

// import components
import ScheduleSession from "./Session";

export default class ScheduleItem extends React.Component {
    renderScheduleSession(session, index) {
        return (
            <ScheduleSession
                key={`HomeSectionTopScheduleSession${index}`}
                time={session.title}
                title={session.time} />
        );
    }

    render() {
        const { sessions } = this.props;

        return (
            <div className="item">
                {sessions.map(this.renderScheduleSession.bind(this))}
            </div>
        );
    }
}