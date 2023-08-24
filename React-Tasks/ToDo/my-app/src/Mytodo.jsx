import React from "react";
import App from "./App";

function Mytodo(props) {
  return (
    <div>
      <div className="my-todos-filter">Status Filter:</div>
      <div>
        <h2 className="my-todos-list">My Todos List</h2>
        {props.map((item, index) => {
          return (
            <div className="todo-lists" key={index}>
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Mytodo;
