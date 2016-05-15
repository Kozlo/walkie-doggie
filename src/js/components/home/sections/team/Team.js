import React from "react";

import Team1Img from "../../../../../../libs/img/team/team1.jpg";
import Team2Img from "../../../../../../libs/img/team/team2.jpg";
import Team3Img from "../../../../../../libs/img/team/team3.jpg";

export default class TeamSection extends React.Component {
    render() {
        const teamStyle1 = { background: "url('img/team/team-cover1.jpg')", backgroundSize: "cover" };
        const teamStyle2 = { background: "url('img/team/team-cover2.jpg')", backgroundSize: "cover" };
        const teamStyle3 = { background: "url('img/team/team-cover3.jpg')", backgroundSize: "cover" };
        
        return (
            <section id="team" className="section gray-bg">
                <div className="container">
                    <div className="row title text-center">
                        <h2 className="margin-top">Team</h2>
                        <h4 className="light muted">We're a dream team!</h4>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="team text-center">
                                <div className="cover" style={teamStyle1}>
                                    <div className="overlay text-center">
                                        <h3 className="white">$69.00</h3>
                                        <h5 className="light light-white">1 - 5 sessions / month</h5>
                                    </div>
                                </div>
                                <img src={Team3Img} alt="Team Image" className="avatar" />
                                <div className="title">
                                    <h4>Ben Adamson</h4>
                                    <h5 className="muted regular">Fitness Instructor</h5>
                                </div>
                                <button data-toggle="modal" data-target="#modal1" className="btn btn-blue-fill">Sign Up Now</button>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="team text-center">
                                <div className="cover" style={teamStyle2}>
                                    <div className="overlay text-center">
                                        <h3 className="white">$69.00</h3>
                                        <h5 className="light light-white">1 - 5 sessions / month</h5>
                                    </div>
                                </div>
                                <img src={Team1Img} alt="Team Image" className="avatar" />
                                <div className="title">
                                    <h4>Eva Williams</h4>
                                    <h5 className="muted regular">Personal Trainer</h5>
                                </div>
                                <a href="#" data-toggle="modal" data-target="#modal1" className="btn btn-blue-fill ripple">Sign Up Now</a>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="team text-center">
                                <div className="cover" style={teamStyle3}>
                                    <div className="overlay text-center">
                                        <h3 className="white">$69.00</h3>
                                        <h5 className="light light-white">1 - 5 sessions / month</h5>
                                    </div>
                                </div>
                                <img src={Team2Img} alt="Team Image" className="avatar" />
                                <div className="title">
                                    <h4>John Phillips</h4>
                                    <h5 className="muted regular">Personal Trainer</h5>
                                </div>
                                <a href="#" data-toggle="modal" data-target="#modal1" className="btn btn-blue-fill ripple">Sign Up Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
