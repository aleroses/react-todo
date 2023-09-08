import "../css/TodoCounter.css";

function TodoCounter({ completed, total }) {
  return (
    <h1>
      Has completado <span className="completed">{completed}</span> de <span className="total">{total}</span> ToDos
    </h1>
  );
}

export { TodoCounter };
