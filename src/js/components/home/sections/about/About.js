import React from "react";

//import images
import ilziteImg from "../../../../../../libs/img/team/ilzite.jpg";
import martintinsImg from "../../../../../../libs/img/team/martintins.jpg";
import Team2Img from "../../../../../../libs/img/team/team2.jpg";

//import components
import TeamMember from "./Member";

export default class AboutSection extends React.Component {
    render() {
        // styles
        const sBackground1 = "url('img/team/team-cover1.jpg')";
        const sBackground2 = "url('img/team/team-cover2.jpg')";
        const sBackground3 = "url('img/team/team-cover3.jpg')";

        // team member variables
        const oIlzite = {
            name: "Ilze Maderniece",
            role: "Dog Walker",
            price: "€5",
            sessions: "30 minutes",
            image: {
                url: ilziteImg,
                alt: "Ilze"
            }
        };
        const oMartintins = {
            name: "Martins Kozlovskis",
            role: "Dog Walker",
            price: "€5",
            sessions: "30 minutes",
            image: {
                url: martintinsImg,
                alt: "Martins"
            }
        };
        const oMember3 = {
            name: "Ben Adamson",
            role: "Fitness Instructor",
            price: "$69.00",
            sessions: "1 - 5 sessions / month",
            image: {
                url: Team2Img,
                alt: "Team Image"
            }
        };

        return (
            <section id="aboutUs" className="section gray-bg">
                <div className="container">
                    <div className="row title text-center">
                        <h2 className="margin-top">Team</h2>
                        <h4 className="light muted">We're a dream team!</h4>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <TeamMember member={oIlzite} background={sBackground1} />
                        </div>
                        <div className="col-md-4">
                            <TeamMember member={oMartintins} background={sBackground2} />
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
