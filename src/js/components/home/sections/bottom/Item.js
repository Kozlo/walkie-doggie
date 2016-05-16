import React from "react";

export default class BottomItem extends React.Component {
    // if the hashtag is the last one, empty space isn't needed, otherwise it is
    renderHashtags(hashtag, index, allHashTags) {
        const bIsLast = (allHashTags.length - 1) === index;

        if (!bIsLast) {
            hashtag += " ";
        }

        return hashtag;
    }

    render() {
        const { tweet, hashtags } = this.props;

        return (
            <div className="item text-center">
                <i className="icon fa fa-twitter"></i>
                <h4 className="white light">{tweet}</h4>
                <h4 className="light-white light">{hashtags.map(this.renderHashtags.bind(this))}</h4>
            </div>
        );
    }
}