import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Portfolio from "./components/portfolio/portfolio.js";
import About from "./components/about/about.js";
import Home from "./components/home/";
import "./assets/utilities.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Navbar />
        {/*<Route default exact path="/">
          <Home />
        </Route>
				*/}
        <Route default exact path={["/", "/about"]}>
          <About />
        </Route>
        <Route exact path="/projects">
          <Portfolio />
        </Route>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
