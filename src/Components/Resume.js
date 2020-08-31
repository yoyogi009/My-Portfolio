import React, { Component } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { Container, Row, Col, Figure, Button } from "react-bootstrap";
import profile from "../assets/profile-img.jpg";

//-------resume-page---------//
class Resume extends Component {
  render() {
    return (
      <React.Fragment>
        <Navigation />
        <br />
        <br />
        <Container className="jumbotron" style={{ backgroundColor: "black" }}>
          <Row className="justify-content-md-center">
            {/*---- profile-pic----- */}
            <Col md="auto">
              <Figure.Image
                width={300}
                height={300}
                alt="profile-image"
                src={profile}
                style={{ opacity: "0.9" }}
              />
            </Col>

            {/*-----resume-content------ */}
            <Col sm={8}>
              <h1>
                <span style={{ color: "#5d77ce" }}>Yogesh Maurya</span>
              </h1>
              <div
                class="col-7 col-sm-5"
                style={{ color: "#B1AAA8", marginTop: "30px" }}
              >
                <h5 style={{ color: "orange" }}>MY RESUME :</h5>
                <p> Click👇 to see my resume. </p>

                {/*-----resume-button------ */}
                <a
                  target="_blank"
                  href="https://drive.google.com/file/d/1Pib5emWfTsnIEyC6053draQpGn0saNIE/view?usp=sharing"
                >
                  {" "}
                  <Button style={{ margin: "10px" }} variant="outline-primary">
                    Resume
                  </Button>
                </a>
                {/*-----resume-button-end------ */}
              </div>
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

export default Resume;
