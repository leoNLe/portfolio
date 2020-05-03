import React from 'react';
import Main from './main';
import Navbar from "./components/navbar";
import Footer from "./components/footer";
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
