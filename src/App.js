import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Portfolio from './components/portfolio/portfolio.js';
import About from './components/about/about.js';
import Contact from "./components/contact/contact.js"

import './assets/utilities.css' 
import './App.css';

function App() {
    return (
        <div className="App">
            <Router>
                <Navbar />
                    <Route exact path="/" ><About/> </Route>
                    <Route exact path="/portfolio"> <Portfolio/> </Route>
                    <Route exact path="/contact"> <Contact/> </Route>
                <Footer />
            </Router>
        </div>
  );
}

export default App;
