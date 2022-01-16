import { createSelector } from "reselect";
import { VisibilityFilters } from "./actions";

export const filterSelector = (state) => state.filterReducer;
export const todoSelector = (state) => state.todoReducer;

export const todoListSelector = createSelector([todoSelector], (todoReducer) =>
  todoReducer ? todoReducer.data : null
);

export const filteredTodoDataSelector = createSelector(
  [filterSelector, todoListSelector],
  (filterReducer, todoList) => {
    if (filterReducer && todoList) {
      switch (filterReducer) {
        case VisibilityFilters.SHOW_DONE: {
          return todoList.filter((todo) => todo.done);
        }
        case VisibilityFilters.SHOW_PENDING: {
          return todoList.filter((todo) => !todo.done);
        }
        default: {
          return todoList;
        }
      }
    }
  }
);
