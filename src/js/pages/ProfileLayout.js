import React from "react";
// TODO: implement a profile page-specific layout or use the base one and change the content according to the page
export default class ProfileLayout extends React.Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
      );
    }
}
