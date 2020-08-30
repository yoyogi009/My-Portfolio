import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Figure,
  Button,
  Jumbotron,
} from "react-bootstrap";
import profile from "../assets/profile-img.jpg";
import Skills from "./Skills";

class Intro extends Component {
  render() {
    return (
      <React.Fragment>
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
            <Col>
              <br />
              <br />
              <h1 style={{ color: "#B1AAA8" }}>
                It's &nbsp;
                <span style={{ color: "#5d77de" }}>Yogesh Kumar Maurya</span>
                &nbsp;
              </h1>

              <br />

              <h4 style={{ color: "orange" }}>
                Web Developer and Machine Learning Expert
              </h4>
              <h4 style={{ color: "orange" }}>Opensource Contributor</h4>
              <br />
              <h4 style={{ color: "Red" }}>MY SKILLS :</h4>
              <div className="text-center col-md-8 col-12">
                <Button
                  style={{ margin: "10px" }}
                  className="button-class"
                  variant="outline-primary"
                >
                  React Js
                </Button>{" "}
                <Button style={{ margin: "10px" }} variant="outline-secondary">
                  JavaScript
                </Button>{" "}
                <Button style={{ margin: "10px" }} variant="outline-success">
                  Python
                </Button>{" "}
                <Button style={{ margin: "10px" }} variant="outline-warning">
                  Machine Learning
                </Button>{" "}
                <Button style={{ margin: "10px" }} variant="outline-light">
                  CSS3
                </Button>{" "}
                <Button style={{ margin: "10px" }} variant="outline-dark">
                  HTML5
                </Button>
              </div>
            </Col>
          </Row>
          <hr />
        </Container>
      </React.Fragment>
    );
  }
}

export default Intro;
