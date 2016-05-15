import React from "react";

export default class MembershipContainer extends React.Component {
    render() {
        return (
            <div className="intro-table intro-table-hover">
                <h5 className="white heading hide-hover">Premium Membership</h5>
                <div className="bottom">
                    <h4 className="white heading small-heading no-margin regular">Register Today</h4>
                    <h4 className="white heading small-pt">20% Discount</h4>
                    <a href="#" className="btn btn-white-fill expand">Register</a>
                </div>
            </div>
        );
    }
}