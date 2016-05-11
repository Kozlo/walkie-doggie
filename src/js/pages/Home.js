import React from "react";

import Header from "../components/home/Header";
import TopSection from "../components/home/sections/top/Top";
import ServicesSection from "../components/home/sections/services/Services";
import TeamSection from "../components/home/sections/team/Team";
import PricingSection from "../components/home/sections/pricing/Pricing";
import BottomSection from "../components/home/sections/bottom/Bottom";
import SignUp from "../components/home/SignUp";

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <Header />

                <TopSection />

                <ServicesSection />

                <TeamSection />

                <PricingSection />

                <BottomSection />
                
                <SignUp />
            </div>
        );
    }
}
