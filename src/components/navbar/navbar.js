import React from 'react';
import "./navbar.css";
function navbar() {
    return (
        <nav className="navbar">
        <div className="brand">Leo Nghia Le</div>
      
       
        <div className="navbar-links">
            <a className="" href="index.html">About</a>
            <a className="" href="portfolio.html"> Portfolio </a>
            <a className="" href="contact.html"> Contact </a>
        </div>
        <div className="blank-bar"></div>

    </nav>
    );

}

export default navbar;