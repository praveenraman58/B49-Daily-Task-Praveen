import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container">
        <h1>My todo</h1>
        <form>
          <input type="text" placeholder="Todo Name"></input>
          <input type="text" placeholder="Description"></input>
          <button>Add Todo</button>
        </form>
      </div>
    </>
  );
}

export default App;
