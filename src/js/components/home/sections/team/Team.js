import React from "react";

export default class TeamSection extends React.Component {
    render() {
        const teamStyle1 = { background: "url('img/team/team-cover1.jpg')", backgroundSize: "cover" };
        const teamStyle2 = { background: "url('img/team/team-cover2.jpg')", backgroundSize: "cover" };
        const teamStyle3 = { background: "url('img/team/team-cover3.jpg')", backgroundSize: "cover" };
        
        return (
            <section id="team" class="section gray-bg">
                <div class="container">
                    <div class="row title text-center">
                        <h2 class="margin-top">Team</h2>
                        <h4 class="light muted">We're a dream team!</h4>
                    </div>
                    <div class="row">
                        <div class="col-md-4">
                            <div class="team text-center">
                                <div class="cover" style={teamStyle1}>
                                    <div class="overlay text-center">
                                        <h3 class="white">$69.00</h3>
                                        <h5 class="light light-white">1 - 5 sessions / month</h5>
                                    </div>
                                </div>
                                <img src="img/team/team3.jpg" alt="Team Image" class="avatar" />
                                <div class="title">
                                    <h4>Ben Adamson</h4>
                                    <h5 class="muted regular">Fitness Instructor</h5>
                                </div>
                                <button data-toggle="modal" data-target="#modal1" class="btn btn-blue-fill">Sign Up Now</button>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="team text-center">
                                <div class="cover" style={teamStyle2}>
                                    <div class="overlay text-center">
                                        <h3 class="white">$69.00</h3>
                                        <h5 class="light light-white">1 - 5 sessions / month</h5>
                                    </div>
                                </div>
                                <img src="img/team/team1.jpg" alt="Team Image" class="avatar" />
                                <div class="title">
                                    <h4>Eva Williams</h4>
                                    <h5 class="muted regular">Personal Trainer</h5>
                                </div>
                                <a href="#" data-toggle="modal" data-target="#modal1" class="btn btn-blue-fill ripple">Sign Up Now</a>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="team text-center">
                                <div class="cover" style={teamStyle3}>
                                    <div class="overlay text-center">
                                        <h3 class="white">$69.00</h3>
                                        <h5 class="light light-white">1 - 5 sessions / month</h5>
                                    </div>
                                </div>
                                <img src="img/team/team2.jpg" alt="Team Image" class="avatar" />
                                <div class="title">
                                    <h4>John Phillips</h4>
                                    <h5 class="muted regular">Personal Trainer</h5>
                                </div>
                                <a href="#" data-toggle="modal" data-target="#modal1" class="btn btn-blue-fill ripple">Sign Up Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
