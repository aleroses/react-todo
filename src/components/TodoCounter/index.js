import "../TodoCounter/TodoCounter.css";

function TodoCounter({ completed, total }) {
  return total == completed ? (
    <h1 className="total">Completaste todos los ToDos</h1>
  ) : (
    <h1>
      Has completado <span className="completed">{completed}</span> de{" "}
      <span className="total">{total}</span> ToDos
    </h1>
  );
}

export { TodoCounter };
