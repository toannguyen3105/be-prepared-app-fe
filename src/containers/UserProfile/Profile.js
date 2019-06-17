import React, { Component, Fragment } from "react";
import Navbar from "../../containers/Dashboard/Navbar";
import * as auth from "../../services/Session";
import "./Profile.scss";
import LeftPane from "./LeftPane";

class Profile extends Component {
  render() {
    const name = auth.getItem("name");
    const email = auth.getItem("email");
    return (
      <Fragment>
        <Navbar name={name} />
        <div className="profile-container">
          <div className="container">
            <div className="profile-left-pane">
              <LeftPane name={name} email={email} />
            </div>
            <div className="profile-right-pane">
              <h1>User Info</h1>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
export default Profile;
