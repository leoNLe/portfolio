import React from 'react';
import Main from './main';
import './assets/utilities.css' 

import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import './App.css';

function App() {
    return (
    <div className="App">
        <Navbar />
        <Main />
        <Footer />
    </div>
  );
}

export default App;
