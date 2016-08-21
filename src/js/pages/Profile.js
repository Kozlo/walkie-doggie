import React from "react";

import NavBars from "../components/layout/navbar/NavBars";
import MobileNav from "../components/layout/navbar/MobileNav";
import Header from "../components/profile/Header";

// TODO: implement a user profile page
export default class Profile extends React.Component {
    render() {
        return (
            <div>
                <NavBars />

                <Header />

                <MobileNav />
            </div>
        );
    }
}
