import React from 'react';
import About from './components/about/about.js';
import './assets/utilities.css' 

import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import './App.css';

function App() {
    return (
    <div className="App">
        <Navbar />
        <About />
        <Footer />
    </div>
  );
}

export default App;
