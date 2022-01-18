import { createSelector } from "reselect";

export const filterSelector = (filter) => filter;
export const todoSelector = (state) => state.todoReducer;

export const todoListSelector = createSelector([todoSelector], (todos) =>
  todos ? todos.data : null
);

export const filteredTodoDataSelector = (filter, todoList) => {
  if (filter && todoList) {
    switch (filter) {
      case "done": {
        return todoList.filter((todo) => todo.done);
      }
      case "pending": {
        return todoList.filter((todo) => !todo.done);
      }
      default: {
        return todoList;
      }
    }
  }
};
