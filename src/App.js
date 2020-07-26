import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";

import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Portfolio from './components/portfolio/portfolio.js';
import About from './components/about/about.js';
import Contact from "./components/contact/index.js"

import './assets/utilities.css' 
import './App.css';

function App() {
    return (
        <div className="App">
            <Navbar />
            <BrowserRouter basename={window.location.origin}>
                <Route default exact path="/" ><About/> </Route>
                <Route exact path="/portfolio"> <Portfolio/> </Route>
                <Route exact path="/contact"> <Contact/> </Route>
            </BrowserRouter>
            <Footer />
        </div>
  );
}

export default App;
