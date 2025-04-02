import { createSlice } from "@reduxjs/toolkit";

// État initial du store
const initialState = {
  todos: [],
};

// Création du slice Redux pour les tâches
const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    // Action pour ajouter une tâche
    addTodo: (state, action) => {
      return {
        ...state, // Copie l'état actuel
        todos: [
          ...state.todos, // Copie les tâches existantes
          { id: Date.now(), texte: action.payload, completed: false }, // Ajoute la tâche
        ],
      };
    },

    // Action pour marquer une tâche comme terminée
    toggleTodo: (state, action) => {
      return {
        ...state, // Copie les propriétés de l'état actuel
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed } // Copie la tâche et inverse 'completed'
            : todo
        ),
      };
    },
  },
});

// Exportation des actions et du reducer
export const { addTodo, toggleTodo } = todoSlice.actions;
export default todoSlice.reducer;