import React from "react";

import AuthStore from '../../stores/AuthStore';

export default class Header extends React.Component {
    render() {
        // TODO: figure out if this is needed and make the page according to wireframes
        const oStyle = { opacity: 0 };

        return (
            <header>
                <div className="container">
                    <div className="table">
                        <div className="header-text">
                            <div className="row">
                                <div className="col-md-12 text-center">
                                    <p>Welcome {JSON.parse(AuthStore.getUser()).email}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}
