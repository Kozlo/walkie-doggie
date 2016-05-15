import React from "react";

export default class TestimonialsContainer extends React.Component {
    render() {
        return (
            <div className="intro-table intro-table-third">
                <h5 className="white heading">Happy Clients</h5>
                <div className="owl-testimonials bottom">
                    <div className="item">
                        <h4 className="white heading content">I couldn't be more happy with the results!</h4>
                        <h5 className="white heading light author">Adam Jordan</h5>
                    </div>
                    <div className="item">
                        <h4 className="white heading content">I can't believe how much better I feel!</h4>
                        <h5 className="white heading light author">Greg Pardon</h5>
                    </div>
                    <div className="item">
                        <h4 className="white heading content">Incredible transformation and I feel so healthy!</h4>
                        <h5 className="white heading light author">Christina Goldman</h5>
                    </div>
                </div>
            </div>
        );
    }
}