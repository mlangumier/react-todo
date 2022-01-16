import apiFirebase from "../config/api.firebase";

// export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const SET_FILTER = "SET_FILTER";

export const TRY_ADD_TODO = "TRY_ADD_TODO";
export const ADD_TODO_SUCCESS = "ADD_TODO_SUCCESS";
export const ADD_TODO_ERROR = "ADD_TODO_ERROR";

export const REQUEST_TODO = "REQUEST_TODO";
export const FETCH_TODO = "FETCH_TODO";
export const FETCH_TODO_SUCCESS = "FETCH_TODO_SUCCESS";
export const FETCH_TODO_ERROR = "FETCH_TODO_ERROR";

export const VisibilityFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_DONE: "SHOW_DONE",
  SHOW_PENDING: "SHOW_PENDING",
};

// AJOUTER TODO

export const tryAddTodo = (todo) => {
  return (dispatch, getState, state, store) => {
    const todos = [...getState().todoReducer.data, todo];
    console.log(todos);
    return apiFirebase.put("todos.json", todos).then(
      (response) => dispatch(addTodoSuccess(todo)),
      (error) => dispatch(addTodoError(error))
    );
  };
};

export const addTodoSuccess = (todo) => {
  return {
    type: ADD_TODO_SUCCESS,
    todo,
  };
};

export const addTodoError = (error) => {
  return {
    type: ADD_TODO_ERROR,
    error,
  };
};

// SUPPRIMER TODO

export const deleteTodo = (index) => {
  return {
    type: DELETE_TODO,
    index,
  };
};

// TOGGLE TODO

export const toggleTodo = (index) => {
  return {
    type: TOGGLE_TODO,
    index,
  };
};

// GERER FILTRE

export const setFilter = (filter) => {
  return {
    type: SET_FILTER,
    filter,
  };
};

//* --- HTTP ---

export const requestTodo = () => {
  return {
    type: REQUEST_TODO,
  };
};

export const fetchTodoSuccess = (todos) => {
  return {
    type: FETCH_TODO_SUCCESS,
    todos,
  };
};

export const fetchTodoError = (error) => {
  return {
    type: FETCH_TODO_ERROR,
    error,
  };
};

export const fetchTodo = () => {
  return (dispatch) => {
    dispatch(requestTodo());
    return apiFirebase.get("todos.json").then(
      (response) => {
        const data = response.data;
        dispatch(fetchTodoSuccess(data));
      },
      (error) => {
        dispatch(fetchTodoError(error));
      }
    );
  };
};
