import React, { useRef, useState } from "react";

function Ref() {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const textRef = useRef(null);
  console.log("countRef :", countRef.current);

  function handleClick() {
    setCount(count + 1);
    countRef.current++;
    console.log("Text Ref ", textRef.current);

    textRef.current.focus();
    textRef.current.value = "praveeAish";

    console.log("state Value :", count);
    console.log("Ref Value :", countRef.current);
  }
  return (
    <div>
      <h1>UseRef Demo :</h1>
      <p>State Value : {count}</p>
      <p>Ref Value : {countRef.current}</p>
      <button onClick={handleClick}>Increment</button>

      <input type="text" ref={textRef}></input>
    </div>
  );
}

export default Ref;
