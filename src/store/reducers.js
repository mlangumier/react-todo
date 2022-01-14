import * as actions from "./actions";

export const todoReducer = (state = [], action) => {
  switch (action.type) {
    case actions.ADD_TODO:
      return [...state, action.todo];
    case actions.DELETE_TODO:
      return state.filter((t, index) => index !== action.index);
    case actions.TOGGLE_TODO:
      return state.map((t, index) => {
        if (index === action.index) {
          t.done = !t.done;
        }
        return t;
      });
    default:
      return state;
  }
};

export const filterReducer = (
  state = actions.VisibilityFilters.SHOW_ALL,
  action
) => {
  switch (action.type) {
    case actions.SET_FILTER:
      return action.filter;
    default:
      return state;
  }
};
