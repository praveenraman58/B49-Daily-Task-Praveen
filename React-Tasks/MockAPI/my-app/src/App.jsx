import { useState } from "react";
import "./App.css";
import Axios from "./Axios";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Axios />
    </>
  );
}

export default App;
