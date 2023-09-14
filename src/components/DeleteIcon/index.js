import React from "react";
import { TodoIcon } from "../TodoIcon/index";

function DeleteIcon({ onDelete }) {
  return <TodoIcon type="delete" color="#4F46E5" onClick={onDelete} />;
}

export { DeleteIcon };
