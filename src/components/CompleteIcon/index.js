import React from "react";
import { TodoIcon } from "../TodoIcon/index";

function CompleteIcon({ completed, onComplete }) {
  return (
    <TodoIcon
      type="check"
      color={completed ? "#4CAF50" : "#4F46E5"}
      onClick={onComplete}
    />
  );
}

export { CompleteIcon };
