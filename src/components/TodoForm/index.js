import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoForm.css";

function TodoForm() {
  const { addTodo, setOpenModal } = React.useContext(TodoContext);

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  };

  const [newTodoValue, setNewTodoValue] = React.useState("");

  const onCancel = () => {
    setOpenModal(false);
  };

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  return (
    <form onSubmit={onSubmit} action="">
      <label htmlFor="">Write a new ToDo</label>
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        placeholder="Write something..."
        value={newTodoValue}
        onChange={onChange}
      />
      <div className="buttons">
        <button type="button" className="TodoForm cancel" onClick={onCancel}>
          Cancel
        </button>
        <button type="submit" className="TodoForm save">
          Save
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
