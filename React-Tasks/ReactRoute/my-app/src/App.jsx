import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Fashion from "./Fashion";
import Furniture from "./Furniture";

function App() {
  return (
    <>
      <Router>
        <div className="router">
          <div>
            <nav>
              <ul className="body-heading">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/fashion">Fashion</Link>
                </li>
                <li>
                  <Link to="/furniture">Furniture</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
              </ul>
            </nav>
            <Routes>
              <Route path="/" exact Component={Home}></Route>
              <Route path="/fashion" Component={Fashion}></Route>
              <Route path="/furniture" Component={Furniture}></Route>
              <Route path="/about" Component={About}></Route>
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}
export default App;
