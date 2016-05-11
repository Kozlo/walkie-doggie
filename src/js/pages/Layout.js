import React from "react";
import { Link } from "react-router";

import Preloader from "../components/layout/Preloader";
import Nav from "../components/layout/Nav";
import MobileNav from "../components/layout/MobileNav";
import Footer from "../components/layout/Footer";

export default class Layout extends React.Component {
    render() {
        const { location } = this.props;

        return (
            <div>
                <Preloader />

                <Nav />
                
                {this.props.children}

                <Footer />

                <MobileNav />
            </div>
      );
    }
}
