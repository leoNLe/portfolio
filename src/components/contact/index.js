import React, { useRef }  from "react";
import "./index.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
function Contact() {
    const email = useRef(null);

    function copyEmail() {
        console.log(email.value);    
        document.execCommand("copy");
    }

    return (
        <div className="container-contact">
            <div className="links ">
                <a href="https://github.com/leoNLe/"> 
                    <FontAwesomeIcon className="icon-scale" icon={faLinkedin} size="2x" 
                        href="https://github.com/leoNLe/"/>
                </a>
                <a href="https://www.linkedin.com/in/leo-le-412b2b1a9/">
                    <FontAwesomeIcon className="icon-scale" icon={faGithub} size="2x"/>
                </a>
                <div className="email-span">
                    <p  className="text" ref={email}>lnle125@gmail.com</p>
                    <FontAwesomeIcon onClick={copyEmail} className="icon-scale" icon={faEnvelope} size="2x"/>
                </div>
            </div>
            <div className="contact-form">
                <div className="title-border"> 
                    <h3>Email Contact</h3>
                </div>
                <form className="email-form" action="mailto:lnle125@gmail.com" method="post">
                    <div className="form-input-div">
                        <label>Name</label> 
                        <input type="text" />  
                    </div>
                    <div className="form-input-div">
                        <label>Email</label>
                        <input type="email"/>
                    </div>
                    <div className="form-input-div">
                        <label>Message</label>     
                        <textarea id="message"/>
                    </div>
                    <div>
                        <button className="email-btn" type="submit">Send</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact;
