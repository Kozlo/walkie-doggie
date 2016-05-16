import React from "react";

//import components
import BottomItem from "./Item";

export default class BottomSection extends React.Component {
    render() {
        const oItem = {
            tweet: "To enjoy the glow of good health, you must exercise.",
            hashtags: ["#health", "#training", "#exercise"]
        };

        return (
            <section className="section section-padded blue-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2">
                            <div className="owl-twitter owl-carousel">
                                <BottomItem tweet={oItem.tweet} hashtags={oItem.hashtags} />

                                <BottomItem tweet={oItem.tweet} hashtags={oItem.hashtags} />

                                <BottomItem tweet={oItem.tweet} hashtags={oItem.hashtags} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
