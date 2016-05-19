import React from "react";

//import components
import BottomItem from "./Item";

export default class BottomSection extends React.Component {
    renderBottomItem(item, index) {
        return (
            <BottomItem
                key={`HomeSectionBottomItem${index}`}
                tweet={item.tweet}
                hashtags={item.hashtags} />
        );
    }

    render() {
        const aItems = [{
            tweet: "To enjoy the glow of good health, you must exercise.",
            hashtags: ["#health", "#training", "#exercise"]
        }, {
            tweet: "To enjoy the glow of good health, you must exercise.",
            hashtags: ["#health", "#training", "#exercise"]
        }, {
            tweet: "To enjoy the glow of good health, you must exercise.",
            hashtags: ["#health", "#training", "#exercise"]
        }];

        return (
            <section className="section section-padded blue-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2">
                            <div className="owl-twitter owl-carousel">
                                {aItems.map(this.renderBottomItem.bind(this))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
