import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import SocialLinks from "./SocialLinks";

//---------Navbar-----------//
class Navigation extends Component {
  render() {
    return (
      <Navbar
        collapseOnSelect
        bg="navbar navbar-light navbar-expand-sm shadow-sm p-2 bg-secondary rounded"
        expand="lg"
        sticky="top"
      >
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            {/* -----home-link-------- */}
            <NavLink to="/" className="navbar-brand text-dark">
              <Navbar.Text>Home</Navbar.Text>
            </NavLink>

            {/* -----resume-link-------- */}
            <NavLink to="/resume" className="navbar-brand text-dark">
              <Navbar.Text>Resume</Navbar.Text>
            </NavLink>
            {/* -----about-link-------- */}
            <NavLink to="/about" className="navbar-brand text-dark">
              <Navbar.Text>About</Navbar.Text>
            </NavLink>

            {/* -----contact-link-------- */}
            <NavLink to="/contact" className="navbar-brand text-dark">
              <Navbar.Text>Contact</Navbar.Text>
            </NavLink>
          </Nav>
          <Nav>
            <SocialLinks />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigation;
