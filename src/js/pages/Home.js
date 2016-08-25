import React from "react";

// import other components
import Preloader from "../components/layout/Preloader";
import NavBars from "../components/layout/navbar/NavBars";
import MobileNav from "../components/layout/navbar/MobileNav";
import Header from "../components/home/Header";
import TopSection from "../components/home/sections/top/Top";
import DogWalkingSection from "../components/home/sections/dogWalking/DogWalking";
import AboutSection from "../components/home/sections/about/About";
import PricingSection from "../components/home/sections/pricing/Pricing";
import ContactSection from "../components/home/sections/contact/Contact";

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <Preloader />

                <NavBars />

                <Header />

                <TopSection />

                <DogWalkingSection />

                <AboutSection />

                <PricingSection />

                <ContactSection />

                <MobileNav />
            </div>
        );
    }
}
