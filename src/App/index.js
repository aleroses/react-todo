import React from "react";
import { TodoCounter } from "../components/TodoCounter/index";
import { TodoSearch } from "../components/TodoSearch/index";
import { TodoList } from "../components/TodoList/index";
import { TodoItem } from "../components/TodoItem/index";
import { TodoButton } from "../components/TodoButton/index";
import { useLocalStorage } from "./useLocalStorage";

/* const defaultTodos = [
  { text: "Lorem lorem", completed: true },
  { text: "Don't cry", completed: false },
  { text: "Lorem ipsus", completed: false },
  { text: "Take care", completed: false },
  { text: "Loremlorem", completed: true },
];

localStorage.setItem("ToDos_v1", JSON.stringify(defaultTodos)); */
// localStorage.removeItem("ToDos_v1");

function App() {
  const [todos, saveTodos] = useLocalStorage("ToDos_v1", []);
  const [searchValue, setSearchValue] = React.useState("");

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText);
  });

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);

    // newTodos[todoIndex].completed = true;
    // true = false / false = true
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);

    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  return (
    <>
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <TodoList>
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            // Pasar una función a un componente sin ejecutarla inmediatamente
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      <TodoButton />
    </>
  );
}

export default App;
