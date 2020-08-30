import React, { Component } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { Container, Row, Col, Figure } from "react-bootstrap";
import profile from "../assets/profile-img.jpg";

class About extends Component {
  render() {
    return (
      <React.Fragment>
        <Navigation />
        <br />
        <br />
        <Container className="jumbotron" style={{ backgroundColor: "black" }}>
          <Row className="justify-content-md-center">
            <Col md="auto">
              <Figure.Image
                width={300}
                height={300}
                alt="profile-image"
                src={profile}
                style={{ opacity: "0.9" }}
              />
            </Col>
            <Col sm={8}>
              <h1>
                <span style={{ color: "#5d77ce" }}>Yogesh Maurya</span>
              </h1>
              <br />
              <p style={{ color: "#B1AAA8" }}>
                A web designer and developer from Varanasi in the India. I
                create bespoke websites to help people go further online.
              </p>
              <br />
              <p style={{ color: "#B1AAA8" }}>
                I also spent time with Machine Learning, to explore new models
                and frameworks to solve real-world complex tasks that were tough
                with the software engineering aspect. I also contribute to the
                community a lot in various ways like, organizing events or
                helping people to get started with the technologies. I have
                serious passion for UI effects, animations and creating
                intuitive, dynamic user experiences. Let's make something
                special.
              </p>
              <br />
              {/* <p>Thank You!</p> */}
            </Col>
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

export default About;
