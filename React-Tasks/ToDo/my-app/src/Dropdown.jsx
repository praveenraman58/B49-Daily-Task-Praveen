import React, { useState } from "react";

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>Toggle Dropdown</button>
      {isOpen && (
        <div>
          <p>All</p>
          <p>Complete</p>
          <p>UnComplete</p>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
