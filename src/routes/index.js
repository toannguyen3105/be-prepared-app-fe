
import React, { Component } from "react";
import Home from "../containers/Home/Home";
import SignUp from "../containers/SignUp/SignUp";
import Login from "../containers/Login/Login";
import Dashboard from '../containers/Dashboard/Dashboard'
import { HOME, SINGUP, LOGIN, DASHBOARD } from "../constants";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path={HOME} component={Home} />
          <Route exact path={LOGIN} component={Login} />
          <Route path={SINGUP} component={SignUp} />
          <Route path={DASHBOARD} component={Dashboard} />
        </Switch>
      </Router>
    );
  }
}
export default Routes;