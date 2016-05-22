import React from "react";

export default class Nav extends React.Component {
    render() {
        /* Holder for mobile navigation */
        return (
            <div className="mobile-nav">
                <ul>
                </ul>
                <a href="#" className="close-link"><i className="arrow_up"></i></a>
            </div>
        );
    }
}
