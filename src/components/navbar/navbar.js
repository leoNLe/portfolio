import React from "react";
import { Link } from "react-router-dom";
import resume from "../../assets/resume.pdf";
import "./navbar.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
function navbar() {
  return (
    <nav className="navbar">
      <div className="brand">Leo Nghia Le</div>
      <div className="navbar-links">
        <Link to="/">About</Link>
        <Link className="" to="/projects">
          Projects
        </Link>
        <a className="" href={resume} target="_blank" rel="noopener noreferrer">
          Resume
        </a>
        <div className="links">
          <a href="https://github.com/leoNLe/">
            <FontAwesomeIcon
              className="icon-scale"
              icon={faLinkedin}
              size="2x"
              href="https://github.com/leoNLe/"
            />
          </a>
          <a href="https://www.linkedin.com/in/leo-le-412b2b1a9/">
            <FontAwesomeIcon className="icon-scale" icon={faGithub} size="2x" />
          </a>
          <div className="email-span">
            <div className="text">
              <div className="arrow-up"></div>
              <p>lnle125@gmail.com</p>
            </div>
            <a href="mailto:lnle125@gmail.com">
              <FontAwesomeIcon
                className="icon-scale"
                icon={faEnvelope}
                size="2x"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="blank-bar"></div>
    </nav>
  );
}

export default navbar;
