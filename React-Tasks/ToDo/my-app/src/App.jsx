import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [isCompleteScreen, setIsCompleteScreen] = useState(false);
  const [allTodos, setTodos] = useState([]);
  const [newName, setName] = useState("");
  const [newDescription, setNewDescription] = useState("");

  const handleAddTodo = () => {
    let newTodoItem = {
      title: newName,
      description: newDescription,
    };

    let updateTodoArr = [...allTodos];
    updateTodoArr.push(newTodoItem);
    setTodos(updateTodoArr);
  };

  return (
    <>
      <div className="container">
        <h1>My todo</h1>
        <div>
          <input
            type="text"
            value={newName}
            onChange={(e) => setName(e.target.value)}
            placeholder="Todo Name"
          ></input>
          <input
            type="text"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
            placeholder="Description"
          ></input>
          <button type="button" onClick={handleAddTodo}>
            Add Todo
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
