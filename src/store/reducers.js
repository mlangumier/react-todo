import * as actions from "./actions";

export const todoReducer = (
  state = {
    data: [],
    loading: false,
    error: null,
  },
  action
) => {
  switch (action.type) {
    case actions.ADD_TODO_SUCCESS:
      return {
        ...state,
        data: [...state.data, action.todo],
      };
    case actions.ADD_TODO_ERROR:
      return {
        ...state,
        error: action.error,
      };
    case actions.DELETE_TODO:
      return {
        ...state,
        data: state.data.filter((t, index) => index !== action.index),
      };
    case actions.TOGGLE_TODO: {
      return {
        ...state,
        data: state.data.map((t, index) =>
          index === action.index ? { ...t, done: !t.done } : t
        ),
      };
    }
    // HTTPs
    case actions.REQUEST_TODO: {
      return {
        ...state,
        loading: true,
      };
    }
    case actions.FETCH_TODO_SUCCESS: {
      if (action.todos) {
        return {
          ...state,
          data: action.todos,
          loading: false,
          error: null,
        };
      } else {
        return {
          ...state,
          loading: false,
        };
      }
    }
    case actions.FETCH_TODO_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    }
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
