import React from "react";
import "../TodoCounter/TodoCounter.css";
import { TodoContext } from "../TodoContext";

function TodoCounter() {
  const { completedTodos, totalTodos } = React.useContext(TodoContext);

  return totalTodos == completedTodos ? (
    <h1 className="total">You completed all the ToDos</h1>
  ) : (
    <h1>
      You have completed <span className="completed">{completedTodos}</span> out of{" "}
      <span className="total">{totalTodos}</span> ToDos
    </h1>
  );
}

export { TodoCounter };
