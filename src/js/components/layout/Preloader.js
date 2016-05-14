import React from "react";

export default class Preloader extends React.Component {
    render() {
        return (
            <div className="preloader">
                <img src="img/loader.gif" alt="Preloader image" />
            </div>
        );
    }
}
