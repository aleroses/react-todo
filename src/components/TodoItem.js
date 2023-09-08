import "../css/TodoItem.css";

function TodoItem(props) {
  return (
    <li>
      <span className={`check ${props.completed && "check--active"}`}></span>
      <p className={`${props.completed && "p--completed"}`}>{props.text}</p>
      <span className={`delete`}></span>
    </li>
  );
}

export { TodoItem };
