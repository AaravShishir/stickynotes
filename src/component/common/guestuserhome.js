import React from "react";
import { Image, Carousel } from "react-bootstrap";

class GuestUserHome extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Carousel>
            <Carousel.Item>
              <img className="d-block w-100" src="./images/carousels/1.jpg" alt="About Sticky Notes" />
              <Carousel.Caption>
                <h3>About Sticky Notes</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src="./images/carousels/2.jpg" alt="Features" />
              <Carousel.Caption>
                <h3>What we Offer</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src="./images/carousels/3.jpg" alt="Join Us" />
              <Carousel.Caption>
                <h3>Sign Up for Free</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    );
  }
}

export default GuestUserHome;
