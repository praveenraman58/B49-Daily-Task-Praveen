import React from "react";
import Child from "./Child";

function Parent() {
  const names = ["Praveen", "Aishu", "Kutlu"];
  return (
    <div>
      <h1>List of Names</h1>
      <Child names={names}></Child>
    </div>
  );
}

export default Parent;
