import React, { useState } from "react";
import Style from "../src/index.css";

function App() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");

  const addToDo = (todo) => {
    const newToDo = {
      id: Math.random(),
      todo: todo,
    };

    // add the todo to the list
    setList([...list, newToDo]);

    // clear input box
    setInput("");
  };
  const deleteToDo = (id) => {
    // Filter out todo with the id...
    const newList = list.filter((todo) => todo.id !== id);

    setList(newList);
  };

  return (
    <div>
      <h1> To-Do List</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => addToDo(input)}> ADD </button>
      <div className="input-btn">
        {list.map((todo) => (
          <li key={todo.id}>
            <div className="list-item">{todo.todo}</div>

            <button onClick={() => deleteToDo(todo.id)}>&times;</button>
          </li>
        ))}
      </div>
    </div>
  );
}

export default App;
