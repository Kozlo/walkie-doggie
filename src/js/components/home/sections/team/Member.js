import React from "react";

export default class TeamMember extends React.Component {
    render() {
        const { member, background } = this.props;
        const oStyle = {
            background: background,
            backgroundSize: "cover"
        };
        
        return(
            <div className="team text-center">
                <div className="cover" style={oStyle}>
                    <div className="overlay text-center">
                        <h3 className="white">{member.price}</h3>
                        <h5 className="light light-white">{member.sessions}</h5>
                    </div>
                </div>
                <img src={member.image.url} alt={member.image.alt} className="avatar" />
                <div className="title">
                    <h4>{member.name}</h4>
                    <h5 className="muted regular">{member.role}</h5>
                </div>
                <button data-toggle="modal" data-target="#modal1" className="btn btn-blue-fill">Sign Up Now</button>
            </div>
        );
    }
}