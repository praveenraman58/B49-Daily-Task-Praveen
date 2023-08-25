import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [ ]
  return (
    <>
      <div className="container">
        <h1>My todo</h1>
        <div>
          <input type="text" placeholder="Todo Name"></input>
          <input type="text" placeholder="Description"></input>
          <button type="button">Add Todo</button>
        </div>
        <div>
          <h2 className="list">MY TODOS LIST</h2>
        </div>
      </div>
    </>
  );
}

export default App;
