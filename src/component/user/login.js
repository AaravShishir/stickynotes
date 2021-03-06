import React, { Component } from "react";
import "../../assets/styles/login.css";
import userAPI from "../../api/user_api";
import $ from "jquery";

class Login extends Component {
  nextPath(path) {
    this.props.history.push(path);
  }

  loginUser = async () => {
    const userId = $("#email").val();
    const pwd = $("#pswd").val();
    await userAPI.loginUser(userId, pwd).then((data) => {
      if (data) {
        this.nextPath("/");
      } else {
      }
    });
  };

  nextPath(path) {
    this.props.history.push(path);
  }

  render() {
    return (
      <>
        <div className="row justify-content-center my-4">
          <div className="col-md-6 col-xs-6 login_box">
            <div className="col-md-12 col-xs-12" align="center">
              <div className="outter my-3">
                <img src={process.env.PUBLIC_URL + "/images/BrandLogo.png"} alt="Sticky Notes" className="image-circle" />
              </div>
            </div>
            <div className="col-md-12 col-xs-12 follow line text-white" align="center">
              <h3>Explore Sticky Notes</h3>
            </div>

            <div className="col-md-12 col-xs-12 login_control mb-3">
              <div className="control">
                <div className="label">Email Address</div>
                <input id="email" type="text" className="form-control" placeholder="E-mail" />
              </div>

              <div className="control">
                <div className="label">Password</div>
                <input id="pswd" type="password" className="form-control" placeholder="Password" />
              </div>
              <div align="center">
                <button className="btn btn-outline-danger" onClick={() => this.loginUser()}>
                  Login
                </button>
                <button className="btn btn-outline-primary ml-2">Forgot Password?</button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Login;
