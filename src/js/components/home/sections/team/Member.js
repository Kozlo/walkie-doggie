import React from "react";

export default class TeamMember extends React.Component {
    render() {
        const oMember = this.props.member;
        const oStyle = {
            background: this.props.background,
            backgroundSize: "cover"
        };
        
        return(
            <div className="team text-center">
                <div className="cover" style={oStyle}>
                    <div className="overlay text-center">
                        <h3 className="white">{oMember.price}</h3>
                        <h5 className="light light-white">{oMember.sessions}</h5>
                    </div>
                </div>
                <img src={oMember.image.url} alt={oMember.image.alt} className="avatar" />
                <div className="title">
                    <h4>{oMember.name}</h4>
                    <h5 className="muted regular">{oMember.role}</h5>
                </div>
                <button data-toggle="modal" data-target="#modal1" className="btn btn-blue-fill">Sign Up Now</button>
            </div>
        );
    }
}