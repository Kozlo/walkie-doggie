import React from "react";

export default class SignUp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: "",
            firstName: "",
            lastName: "",
            phone: ""
        }
    }
    handleChange(key, event) {
        this.setState({ [key]: event.target.value});
    }
    onSubmit() {
        let { email, password, firstName, lastName, phone } = this.state;

        fetch('/register', {
            method: 'post',
            body: JSON.stringify({
                email: email,
                password: password,
                firstName: firstName,
                lastName: lastName,
                phone: phone
            })
        })
            .then((response) => response.json())
            .then((responseJson) => {
                // TODO: remove the console.log/alert when done developing
                console.log("Got some response: ", responseJson);
                if (responseJson.success) {
                    // TODO: replace/remove when done developing
                    alert(responseJson.message);
                    // TODO: figure out how to login the user in the best way
                } else if (responseJson.error) {
                    alert("An error has occurred: " + responseJson.error)
                } else {
                    alert("Something unexpected has happened! Contact Mārtiņtiņš!");
                }
            })
            .catch((error) => {
                alert("An error occurred while creating an account!");
                console.error("An error occurred while creating an account: ", error);
            });
    }
    render() {
        let { email, password, firstName, lastName, phone } = this.state;

        return (
            <div className="modal fade" id="signUpModal" tabIndex="-1" role="dialog" aria-labelledby="signUpModal" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content modal-popup">
                        <a href="#" className="close-link"><i className="icon_close_alt2"></i></a>
                        <h3 className="white">Sign Up</h3>
                        <form type="post" onSubmit={this.onSubmit.bind(this)} action="" className="popup-form">
                            <input required type="email" className="form-control form-white" placeholder="Email Address" value={email} onChange={this.handleChange.bind(this, "email")} />
                            <input required type="password" className="form-control form-white" placeholder="Password" value={password} onChange={this.handleChange.bind(this, "password")} />
                            <input required type="text" className="form-control form-white" placeholder="First Name" value={firstName} onChange={this.handleChange.bind(this, "firstName")} />
                            <input required type="text" className="form-control form-white" placeholder="Last Name" value={lastName} onChange={this.handleChange.bind(this, "lastName")} />
                            <input required type="tel" className="form-control form-white" placeholder="Mobile Phone Number" value={phone} onChange={this.handleChange.bind(this, "phone")} />

                            <div className="checkbox-holder text-left">
                                <div className="checkbox">
                                    <input required type="checkbox" value="None" id="squaredOne" name="check" />
                                    <label htmlFor="squaredOne"><span>I Agree to the <strong> Terms &amp; Conditions</strong></span></label>
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
