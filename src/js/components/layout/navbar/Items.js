import React from "react";

// import other components
import NavBarLink from "./Link";

// import actions and stores
import AuthActions from '../../../actions/AuthActions';
import AuthStore from '../../../stores/AuthStore';
//import TestActions from '../../../actions/TestActions';
//import TestStore from '../../../stores/TestStore';

export default class NavBarItems extends React.Component {

    constructor() {
        super();
        this.state = {
            authenticated: AuthStore.isAuthenticated(),
            success: false
        };
        //this.onChange = this.onChange.bind(this);
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
    }

    componentWillMount() {
        //TestStore.addChangeListener(this.onChange);
    }

    componentDidMount() {
        //TestActions.getSuccess();
    }

    componentWillUnmount() {
        //TestStore.removeChangeListener(this.onChange);
    }

/*    onChange() {
        this.setState({
            success: TestStore.getSuccess()
        });
    }*/

    // TODO: figure out exactly what this does and why it's needed
    componentWillReceiveProps(nextProp) {
/*        this.setState({
            success: TestActions.getSuccess()
        });*/
    }

/*    getSuccess() {
        TestActions.getSuccess();
    }*/

    login() {
        this.props.lock.show((err, profile, token) => {
            if (err) {
                // TODO: replace this with a normal error... thing...
                alert(err);
                return;
            }
            AuthActions.logUserIn(profile, token);
            this.setState({authenticated: true});
        });
    }

    logout() {
        AuthActions.logUserOut();
        this.setState({authenticated: false});
    }

    renderNavBarLink(link, index) {
        return (
            <NavBarLink
                key={`LayoutNavBarLink${index}`}
                url={link.url}
                dataToggle={link.dataToggle}
                dataTarget={link.dataTarget}
                classNames={link.classNames}
                text={link.text} />
        );
    }

    render() {
        const { ulClasses } = this.props;

        const aNavLinks = [{
            url: "#intro",
            text: "Intro"
        }, {
            url: "#services",
            text: "Services"
        }, {
            url: "#team",
            text: "Team"
        }, {
            url: "#pricing",
            text: "Pricing"
        },/*, {
            url: "#",
            text: "Log In",
            dataToggle: "modal",
            dataTarget: "#logInModal"
        }, {
            url: "#",
            text: "Sign Up",
            dataToggle: "modal",
            dataTarget: "#signUpModal",
            classNames: "btn btn-sm btn-blue"
        }*/];

        return (
            <ul className={ulClasses}>
                {aNavLinks.map(this.renderNavBarLink.bind(this))}
                {/*TODO: consider moving this to the NavLinks and also add visible state based on the authencated and add onClick there as well*/}
                {!this.state.authenticated ? (
                    <li><a onClick={this.login.bind(this)} className={"btn btn-sm btn-blue"}>{"Login/Register"}</a></li>
                ) : (
                    <li><a onClick={this.logout.bind(this)} className={"btn btn-sm btn-blue"}>{"Logout"}</a></li>
                )}
                {/*TODO: remove when done testing*/}
                {/*<li><button onClick={this.getSuccess} className="btn btn-sm btn-blue">Get Success</button></li>
                <li><p>Success: {this.state.success ? "success" : "failure"}</p></li>*/}
            </ul>
        );
    }
}