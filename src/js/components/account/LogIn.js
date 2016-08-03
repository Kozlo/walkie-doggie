import React from "react";

export default class LogIn extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: ""
        }
    }
    handleChange(key, event) {
        this.setState({ [key]: event.target.value});
    }
    onSubmit(username, password) {
        const sUrl = `/login?username=${username}&password=${password}`;

        fetch(sUrl, {
            method: 'GET'
        })
/*        fetch("/login", {
            method: 'post',
            contentType: "application/json",
            body: JSON.stringify({
                username: username,
                password: password
            })
        })*/
            .then((responseJson) => {
                debugger;
                // TODO: remove the console.log/alert when done developing
                console.log("Got some response: ", responseJson);
                if (responseJson.success) {
                    // TODO: replace/remove when done developing
                    alert(responseJson.message);
                } else if (responseJson.error) {
                    alert("An error has occurred: " + responseJson.error)
                } else {
                    alert("Something unexpected has happened! Contact Mārtiņtiņš!");
                }
            })
            .catch((error) => {
                debugger;
                alert("An error occurred while logging in!");
                console.error("An error occurred while logging in: ", error);
            });
    }
    render() {
        let { email, password } = this.state;

        return (
            <div className="modal fade" id="logInModal" tabIndex="-1" role="dialog" aria-labelledby="loginModal" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content modal-popup">
                        <a href="#" className="close-link"><i className="icon_close_alt2"></i></a>
                        <h3 className="white">Sign Up</h3>
                        <form type="post" onSubmit={this.onSubmit.bind(this, email, password)} action="" className="popup-form">
                            <input required type="email" className="form-control form-white" placeholder="Email Address" value={email} onChange={this.handleChange.bind(this, "email")} />
                            <input required type="password" className="form-control form-white" placeholder="Password" value={password} onChange={this.handleChange.bind(this, "password")} />
                            <button type="submit" className="btn btn-submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
