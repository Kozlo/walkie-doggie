import React from "react";
// might need this later
//import { Link } from "react-router";

// import other components
import Footer from "../components/layout/footer/Footer";

export default class Layout extends React.Component {
    componentWillMount() {
        // TODO: move this elsewhere and store the ids in environmental paths
        this.lock = new Auth0Lock('t48Z83ky2Kvi1NyuAA9j1Uop3pDi3b9n', 'kozlo.eu.auth0.com');
    }

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
