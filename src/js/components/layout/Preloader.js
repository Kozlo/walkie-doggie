import React from "react";

import LoaderImg from "../../../../libs/img/loader.gif";

export default class Preloader extends React.Component {
    render() {
        return (
            <div className="preloader">
                <img src={LoaderImg} alt="Preloader image" />
            </div>
        );
    }
}
