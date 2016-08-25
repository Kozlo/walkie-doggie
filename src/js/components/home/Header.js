import React from "react";

export default class Header extends React.Component {
    render() {
        const oStyle = { opacity: 0 };

        return (
            <header id="intro" style={oStyle}>
                <div className="container">
                    <div className="table">
                        <div className="header-text">
                            <div className="row">
                                <div className="col-md-12 text-center">
                                    <h3 className="light white">Take care of your dog.</h3>
                                    <h1 className="white typed">It's one of the best friend you have.</h1>
                                    <span className="typed-cursor">|</span>
                                    <br />
                                    <button className="btn btn-lg btn-blue">Register</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}
