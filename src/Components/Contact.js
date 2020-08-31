import React, { Component } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { Container, Row, Col, Figure } from "react-bootstrap";
import profile from "../assets/profile-img.jpg";

//---contact-class--//

class Contact extends Component {
  render() {
    return (
      <React.Fragment>
        <Navigation />
        <br />
        <br />
        <Container className="jumbotron" style={{ backgroundColor: "black" }}>
          <Row className="justify-content-md-center">
            {/* Profile-Pic */}

            <Col md="auto">
              <Figure.Image
                width={300}
                height={300}
                alt="profile-image"
                src={profile}
                style={{ opacity: "0.9" }}
              />
            </Col>
            {/* Profile-Pic end*/}

            {/* contact-details */}
            <Col sm={8}>
              <h1>
                <span style={{ color: "#5d77ce" }}>Yogesh Maurya</span>
              </h1>
              <div class="col-7 col-sm-5" style={{ color: "#B1AAA8" }}>
                <h5 style={{ color: "orange", marginTop: "30px" }}>
                  My Address
                </h5>
                Anand Park, Duragakund, Varanasi, UttarPradesh, India
                <p>
                  <i class="fa fa-phone fa-lg"></i>Tel.: +91-9455700899
                </p>
                <p>
                  <i class="fa fa-envelope fa-lg"></i>Email:{" "}
                  <a href="mailto:yogeshykm9@gmail.com">yogeshykm9@gmail.com</a>
                </p>
              </div>
            </Col>

            {/* contact-details end */}

            <Col sm={4}></Col>
          </Row>
          <hr />
        </Container>
        <br />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Contact;
