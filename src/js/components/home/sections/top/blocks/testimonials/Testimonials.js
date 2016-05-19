import React from "react";

// import other modules
import TestimonialItem from "./Item";

export default class Testimonials extends React.Component {
    renderTestimonialItem(item, index) {
        return(
            <TestimonialItem
                key={`HomeSectionTopTestimonial${index}`}
                review={item.review}
                author={item.author}/>
        );
    }

    render() {
        const aTestimonials = [{
            review: "I couldn't be more happy with the results!",
            author: "Adam Jordan"
        }, {
            review: "I can't believe how much better I feel!",
            author: "Greg Pardon"
        }, {
            review: "Incredible transformation and I feel so healthy!",
            author: "Christina Goldman"
        }];

        return (
            <div className="intro-table intro-table-third">
                <h5 className="white heading">Happy Clients</h5>
                <div className="owl-testimonials bottom">
                    {aTestimonials.map(this.renderTestimonialItem.bind(this))}
                </div>
            </div>
        );
    }
}