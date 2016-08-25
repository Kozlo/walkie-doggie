import React from "react";
// might need this later
//import { Link } from "react-router";

// import other components
import Footer from "../components/layout/footer/Footer";

export default class Layout extends React.Component {
    render() {
        // might need this later
        //const { location } = this.props;

        return (
            <div>
                {this.props.children}

                <Footer />
            </div>
        );
    }
}
