import React from "react";

export default class ServiceItem extends React.Component {
    render() {
        const { item } = this.props;

        return (
            <div className="service">
                <div className="icon-holder">
                    <img src={item.image.url} alt={item.image.alt} className="icon"/>
                </div>
                <h4 className="heading">{item.name}</h4>
                <p className="description">{item.description}</p>
            </div>
        );
    }
}