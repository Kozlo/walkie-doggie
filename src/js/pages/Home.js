import React from "react";

// import dependencies
import AuthStore from '../stores/AuthStore';

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
    constructor() {
        super();
        this.state = {
            authenticated: AuthStore.isAuthenticated()
        };
    }
    componentWillMount() {
        AuthStore.addChangeListener(this._onChange.bind(this))
    }
    componentWillUnmount() {
        AuthStore.removeChangeListener(this._onChange.bind(this))
    }
    _onChange() {
        this.setState({
            authenticated: AuthStore.isAuthenticated()
        });
    }
    render() {
        return (
            <div>
                <Preloader />

                <NavBars />

                <Header />

                <TopSection />

                <DogWalkingSection />

                {/* TODO: add a section for the logged in user */}
                { this.state.authenticated ? "" : <AboutSection /> }

                <PricingSection />

                <ContactSection />

                <MobileNav />
            </div>
        );
    }
}
