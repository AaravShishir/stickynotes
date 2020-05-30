import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../tabs/home";
import NotFound from "../common/NotFound";
import SignUp from "../user/signup";
import Login from "../user/login";
import Profile from "../user/profile";
import PrivateRoute from "../../shared/PrivateRoute";

class Body extends React.Component {
  render() {
    return (
      <div className="container my-3">
        <div className="px-2 light home-content">
          <Switch>
            <PrivateRoute exact path="/" component={Home}></PrivateRoute>
            <PrivateRoute exact path="/myprofile" component={Profile}></PrivateRoute>
            <Route exact path="/signup" component={SignUp}></Route>
            <Route exact path="/login" component={Login}></Route>
            <Route path="*" component={NotFound}></Route>
          </Switch>
        </div>
      </div>
    );
  }
}

export default Body;
