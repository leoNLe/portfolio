import React from 'react';

function navbar() {
    return (
        <nav class="navbar">
       
        <a class="navbar-brand text-center brand">
            <h1 class="text-white">Leo Nghia Le</h1>
        </a>
       
        <div class="navbar-nav ml-auto my-auto flex-row text-white">
            <a class="nav-link border-right text-white  px-3" href="index.html">About</a>
            <a class="nav-link border-right text-white px-3" href="portfolio.html"> Portfolio </a>
            <a class="nav-link px-3 text-white" href="contact.html"> Contact </a>
        </div>
        <div class="w-100 blank-bar"></div>

    </nav>
    );

}

export default navbar;