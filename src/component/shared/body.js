import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../tabs/home";
import NotFound from "../common/notfound";
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
            <PrivateRoute exact path="/stickynotes" component={Home}></PrivateRoute>
            <PrivateRoute exact path="/stickynotes/myprofile" component={Profile}></PrivateRoute>
            <Route exact path="/stickynotes/signup" component={SignUp}></Route>
            <Route exact path="/stickynotes/login" component={Login}></Route>
            <Route path="*" component={NotFound}></Route>
          </Switch>
        </div>
      </div>
    );
  }
}

export default Body;
