import React from "react";

// import other components
import Preloader from "../components/layout/Preloader";
import NavBars from "../components/layout/navbar/NavBars";
import MobileNav from "../components/layout/navbar/MobileNav";
import Header from "../components/home/Header";
import TopSection from "../components/home/sections/top/Top";
import ServicesSection from "../components/home/sections/services/Services";
import TeamSection from "../components/home/sections/team/Team";
import PricingSection from "../components/home/sections/pricing/Pricing";
import BottomSection from "../components/home/sections/bottom/Bottom";
import SignUp from "../components/account/SignUp";
import LogIn from "../components/account/LogIn";

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <Preloader />

                <NavBars />

                <Header />

                <TopSection />

                <ServicesSection />

                <TeamSection />

                <PricingSection />

                <BottomSection />
                
                <SignUp />

                <LogIn />

                <MobileNav />
            </div>
        );
    }
}
