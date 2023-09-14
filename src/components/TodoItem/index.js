import { CompleteIcon } from "../CompleteIcon/index";
import { DeleteIcon } from "../DeleteIcon/index";
import "../TodoItem/TodoItem.css";

function TodoItem(props) {
  return (
    <li>
      <CompleteIcon completed={props.completed} onComplete={props.onComplete} />
      <p className={`${props.completed && "p--completed"}`}>{props.text}</p>
      <DeleteIcon onDelete={props.onDelete} />
    </li>
  );
}

export { TodoItem };
