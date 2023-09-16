import React from "react";
import "../TodoCounter/TodoCounter.css";
import { TodoContext } from "../TodoContext";

function TodoCounter() {
  const { completedTodos, totalTodos } = React.useContext(TodoContext);

  return totalTodos == completedTodos ? (
    <h1 className="total">Completaste todos los ToDos</h1>
  ) : (
    <h1>
      Has completado <span className="completed">{completedTodos}</span> de{" "}
      <span className="total">{totalTodos}</span> ToDos
    </h1>
  );
}

export { TodoCounter };
