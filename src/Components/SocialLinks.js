import React, { Component } from "react";

export default class SocialLinks extends Component {
  render() {
    return (
      <>
        <a
          target="_blank"
          href="https://www.facebook.com/yogeshrocks9/"
          className="nav-link "
        >
          <i className="fa fa-facebook " />
        </a>
        <a
          target="_blank"
          href="https://twitter.com/its_yogex"
          className="nav-link "
        >
          <i className="fa fa-twitter " />
        </a>
        <a
          target="_blank"
          href="https://github.com/yoyogi009"
          className="nav-link "
        >
          <i className="fa fa-github " />
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/-yogesh-maurya/"
          className="nav-link "
        >
          <i className="fa fa-linkedin " />
        </a>
      </>
    );
  }
}
