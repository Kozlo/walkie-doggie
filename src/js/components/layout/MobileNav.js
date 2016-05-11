import React from "react";

export default class Nav extends React.Component {
    render() {
        /* Holder for mobile navigation */
        return (
            <div class="mobile-nav">
                <ul>
                </ul>
                <a href="#" class="close-link"><i class="arrow_up"></i></a>
            </div>
        );
    }
}
