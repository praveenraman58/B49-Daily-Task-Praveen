import React, { useContext } from "react";
import { AnimalContext } from "./AnimalContext";

function ChangeSoundButton() {
  const { setAnimalSound } = useContext(AnimalContext);

  const changeSound = (newSound) => {
    setAnimalSound(newSound);
  };

  return <button onClick={() => changeSound("praveen")}>Change Sound!!</button>;
}

export default ChangeSoundButton;
