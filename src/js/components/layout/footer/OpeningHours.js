import React from "react";

export default class OpeningHours extends React.Component {
    render() {
        const { days, hours } = this.props;
        return (
            <div className="text-center-mobile">
                <h5 className="light-white light">{days}</h5>
                <h3 className="regular white">{hours}</h3>
            </div>
        );
    }
}