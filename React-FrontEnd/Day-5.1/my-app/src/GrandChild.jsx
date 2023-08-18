import React from "react";

function GrandChild(props) {
  return (
    <div>
      <h3>GrandChild Components</h3>
      <p>Names from parent : {props.names.join(", ")}</p>
    </div>
  );
}

export default GrandChild;
