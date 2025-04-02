export const selectTodos = (state) => state.todos.todos;
export const selectCompletedTodos = (state) => state.todos.todos.filter((todo) => todo.completed);