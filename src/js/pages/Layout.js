import React from "react";
// might need this later
//import { Link } from "react-router";

// import other components
import Preloader from "../components/layout/Preloader";
import Nav from "../components/layout/navbar/Nav";
import MobileNav from "../components/layout/MobileNav";
import Footer from "../components/layout/footer/Footer";

export default class Layout extends React.Component {
    render() {
        // might need this later
        //const { location } = this.props;

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
