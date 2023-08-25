import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
// import Home from "./Home";
// import About from "./About";
// import Contact from "./Contact";
import Food from "./Food";

function App() {
  return (
    <>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                {/* <Link to="/">Home</Link> */}
                <Link to="/food/briyani">Briyani</Link>
                <img src="data:image/jpeg;base64,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" />
              </li>
              <li>
                {/* <Link to="/about">About</Link> */}
                <Link to="/food/chicken65">Chicken65</Link>
                <img src="data:image/jpeg;base64,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" />
              </li>
              <li>
                <Link to="/food/lollipop">lollipop</Link>
                {/* <Link to="/contact">Contact</Link> */}
              </li>
            </ul>
          </nav>
          <Routes>
            {/* <Route path="/" exact Component={Home} ></Route>
            <Route path="/about" Component={About}></Route>
            <Route path="/contact" Component={Contact}></Route> */}
            <Route path="/food/:foodName" Component={Food}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;