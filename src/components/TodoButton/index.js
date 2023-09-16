import "./TodoButton.css";

function TodoButton({ setOpenModal }) {
  return (
    <button
      className="add"
      onClick={() => {
        setOpenModal((state) => !state);
      }}
    ></button>
  );
}

export { TodoButton };
