import React, { useState, useRef } from "react";
import { useEffect } from "react";

function ClickGame() {
  //we  will use state to remember the count of clicks
  const [clickCount, setClickCount] = useState(0);

  // we will use useRef to remember the timer

  const timerRef = useRef(null);
  const clickCountRef = useRef(clickCount);

  clickCountRef.current = clickCount;

  // function runs when you start the game
  const startGame = () => {
    setClickCount(0); // reset the click count

    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    // set up to stop the game after 5 seconds

    timerRef.current = setTimeout(() => {
      alert(`Game over! you clicked ${clickCountRef.current} times`);
    }, 5000);
  };

  // Function to hands button clicks
  const handleClick = () => {
    setClickCount(clickCount + 1);
  };

  return (
    <div>
      <h1>Click the button</h1>
      <p>Click count:{clickCount}</p>
      <button onClick={handleClick}>Click me!</button>
      <button onClick={startGame}>Start game!</button>
    </div>
  );
}

export default ClickGame;
