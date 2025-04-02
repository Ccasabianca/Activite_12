import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, toggleTodo } from "./redux/todoSlice";
import { selectTodos, selectCompletedTodos } from "./redux/selectors";
import "./App.css"; // Import du fichier CSS

const App = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector(selectTodos);
  const completedTodos = useSelector(selectCompletedTodos);

  const handleAddTodo = () => {
    if (input.trim() !== "") {
      dispatch(addTodo(input));
      setInput("");
    }
  };

  return (
    <div className="app-container">
      <h1>Liste des tâches</h1>
      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ajouter une tâche..."
        />
        <button onClick={handleAddTodo}>Ajouter</button>
      </div>
      <ul className="todo-list">
        {todos.map((todo) => (
          <li
            key={todo.id}
            onClick={() => dispatch(toggleTodo(todo.id))}
            className={todo.completed ? "completed" : ""}
          >
            {todo.texte}
          </li>
        ))}
      </ul>

      <h2>Tâches terminées</h2>
      <ul className="completed-list">
        {completedTodos.map((todo) => (
          <li key={todo.id}>{todo.texte}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
