import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// import Dropdown from "./Dropdown.jsx";
import Mytodo from "./Mytodo.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    {/* <div className="dropdown">
      <Dropdown />
    </div> */}
    <div className="mytodos">
      <Mytodo />
    </div>
  </React.StrictMode>
);
