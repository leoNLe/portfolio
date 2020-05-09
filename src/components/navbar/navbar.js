import React from 'react';
import "./navbar.css";
function navbar() {
    return (
        <nav className="navbar">
        <div className="brand">Leo Nghia Le</div>
      
       
        <div className="navbar-links">
            <a className="" href="/">About</a>
            <a className="" href="/portfolio"> Portfolio </a>
            <a className="" href="/contact"> Contact </a>
        </div>
        <div className="blank-bar"></div>

    </nav>
    );

}

export default navbar;