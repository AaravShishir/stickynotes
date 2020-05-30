import React from "react";
import { Nav, Navbar, Container, Button, NavDropdown } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showSignup: false };
  }

  LoginUser() {
    this.setState({ showSignup: true });
    this.nextPath("/login");
  }

  SignUpUser() {
    this.setState({ showSignup: true });
    this.nextPath("/signup");
  }

  SignOutUser() {
    this.setState({ showSignup: false });
    this.nextPath("/");
  }

  nextPath(path) {
    this.props.history.push(path);
  }

  GetUserProfile() {
    this.nextPath("/myprofile");
  }

  render() {
    return (
      <div className="pt-4">
        <Container>
          <Navbar className="rounded" sticky="top" collapseOnSelect expand="lg" bg="light " variant="light ">
            <Navbar.Brand as={Link} to="/" title="Home">
              <img src="./images/BrandLogo.png" width="30" height="30" className="d-inline-block align-top" alt="Sticky Notes" />
            </Navbar.Brand>
            <Navbar.Collapse>
              <Nav className="mr-auto brandName">Sticky Notes</Nav>
            </Navbar.Collapse>
            <Nav className="ml-auto nav-buttons">
              <Button hidden={this.state.showSignup} className="mr-2" variant="outline-primary" onClick={() => this.SignUpUser()}>
                Sign Up
              </Button>
              <Button hidden={this.state.showSignup} variant="outline-success" onClick={() => this.LoginUser()}>
                Login
              </Button>
              <NavDropdown title=" Hi, Shishir " hidden={!this.state.showSignup}>
                <div className="px-2">
                  <Button variant="success" className=" mb-2" onClick={() => this.GetUserProfile()}>
                    Profile
                  </Button>
                  <Button variant="danger" onClick={() => this.SignOutUser()}>
                    Logout
                  </Button>
                </div>
              </NavDropdown>
            </Nav>
          </Navbar>
        </Container>
      </div>
    );
  }
}

export default withRouter(Header);
