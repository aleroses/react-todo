import "../css/TodoButton.css";

function TodoButton() {
  return (
    <button
      className="add"
      onClick={(event) => {
        console.log(event);
        console.log(event.target);
      }}
    ></button>
  );
}

export { TodoButton };
