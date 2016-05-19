import React from "react";

//import all components
import PricingPlan from "./pricing/Plan";

export default class SignUp extends React.Component {
    render() {
        return (
            <div className="modal fade" id="modal1" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content modal-popup">
                        <a href="#" className="close-link"><i className="icon_close_alt2"></i></a>
                        <h3 className="white">Sign Up</h3>
                        <form action="" className="popup-form">
                            <input type="text" className="form-control form-white" placeholder="Full Name" />
                            <input type="text" className="form-control form-white" placeholder="Email Address" />

                            <PricingPlan />

                            <div className="checkbox-holder text-left">
                                <div className="checkbox">
                                    <input type="checkbox" value="None" id="squaredOne" name="check" />
                                    <label htmlFor="squaredOne"><span>I Agree to the <strong>Terms &amp; Conditions</strong></span></label>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
