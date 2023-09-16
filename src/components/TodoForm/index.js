import React from "react";
import "./TodoForm.css";

function TodoForm() {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
      }}
      action=""
    >
      <label htmlFor="">Write a new ToDo</label>
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        placeholder="Write something..."
      />
      <div className="buttons">
        <button type="" className="TodoForm cancel">
          Cancel
        </button>
        <button type="" className="TodoForm save">
          Save
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
