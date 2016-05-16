import React from "react";

//import images
import Team1Img from "../../../../../../libs/img/team/team1.jpg";
import Team2Img from "../../../../../../libs/img/team/team2.jpg";
import Team3Img from "../../../../../../libs/img/team/team3.jpg";

//import components
import TeamMember from "./Member";

export default class TeamSection extends React.Component {
    render() {
        // styles
        const sBackground1 = "url('img/team/team-cover1.jpg')";
        const sBackground2 = "url('img/team/team-cover2.jpg')";
        const sBackground3 = "url('img/team/team-cover3.jpg')";

        // team member variables
        const oMember1 = {
            name: "Ben Adamson",
            role: "Fitness Instructor",
            price: "$69.00",
            sessions: "1 - 5 sessions / month",
            image: {
                url: Team1Img,
                alt: "Team Image"
            }
        };
        const oMember2 = {
            name: "Eva Williams",
            role: "Personal Trainer",
            price: "$69.00",
            sessions: "1 - 5 sessions / month",
            image: {
                url: Team2Img,
                alt: "Team Image"
            }
        };
        const oMember3 = {
            name: "John Phillips",
            role: "Personal Trainer",
            price: "$69.00",
            sessions: "1 - 5 sessions / month",
            image: {
                url: Team3Img,
                alt: "Team Image"
            }
        };

        return (
            <section id="team" className="section gray-bg">
                <div className="container">
                    <div className="row title text-center">
                        <h2 className="margin-top">Team</h2>
                        <h4 className="light muted">We're a dream team!</h4>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <TeamMember member={oMember1} background={sBackground1} />
                        </div>
                        <div className="col-md-4">
                            <TeamMember member={oMember2} background={sBackground2} />
                        </div>
                        <div className="col-md-4">
                            <TeamMember member={oMember3} background={sBackground3} />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
