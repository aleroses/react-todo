import "../css/TodoItem.css";

function TodoItem(props) {
  return (
    <li>
      <span
        className={`check ${props.completed && "check--active"}`}
        onClick={props.onComplete}
      ></span>
      <p className={`${props.completed && "p--completed"}`}>{props.text}</p>
      <span className="delete" onClick={props.onDelete}></span>
    </li>
  );
}

export { TodoItem };
