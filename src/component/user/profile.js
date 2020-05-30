import React, { Component } from "react";
import "../../assets/styles/login.css";

class Profile extends Component {
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
                <img
                  src={process.env.PUBLIC_URL + "/images/BrandLogo.png"}
                  alt="Shishir"
                  title="Upload Image"
                  className="image-circle update-image"
                />
              </div>
            </div>
            <div className="col-md-12 col-xs-12 follow line text-white" align="center">
              <h3>Hi, Shishir</h3>
            </div>
            <div className="col-md-12 col-xs-12 login_control mb-3">
              <div className="control">
                <div className="label">First Name</div>
                <input type="text" className="form-control" placeholder="First Name" defaultValue="Shishir" />
              </div>
              <div className="control">
                <div className="label">Last Name</div>
                <input type="text" className="form-control" placeholder="Last Name" defaultValue="Kumar" />
              </div>
              <div className="control">
                <div className="label">E-mail</div>
                <input type="text" className="form-control" placeholder="E-mail" value="xyz@gmail.com" disabled />
              </div>
              <div className="control">
                <div className="label">Phone Number</div>
                <input type="text" className="form-control" placeholder="Phone Number" value="+91-1234567890" disabled />
              </div>
              <div className="control">
                <div className="label">Password</div>
                <input type="password" className="form-control" placeholder="Password" defaultValue="*******" />
              </div>
              <div className="control">
                <div className="label">Confirm Password</div>
                <input type="password" className="form-control" placeholder="Confirm Password" defaultValue="*******" />
              </div>
              <div align="center">
                <button className="btn btn-danger">Update Profile</button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Profile;
