import React from "react";

export default class TestimonialItem extends React.Component {
    render() {
        const { review, author } = this.props;
        return (
            <div className="item">
                <h4 className="white heading content">{review}</h4>
                <h5 className="white heading light author">{author}</h5>
            </div>
        );
    }
}