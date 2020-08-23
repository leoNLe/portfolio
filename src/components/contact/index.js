import React, { useRef } from "react";
import "./index.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
function Contact() {
  return (
    <div className="container-contact">
      <div> Email</div>
      <div>LinkedIn </div>
      <div>Github </div>
      <div> Resume </div>
    </div>
  );
}

export default Contact;
