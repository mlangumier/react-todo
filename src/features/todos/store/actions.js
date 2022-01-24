import apiFirebase from "../../../config/api.firebase";

export const TRY_ADD_TODO = "TRY_ADD_TODO";
export const ADD_TODO_SUCCESS = "ADD_TODO_SUCCESS";
export const ADD_TODO_ERROR = "ADD_TODO_ERROR";

export const TRY_TOGGLE_TODO = "TRY_TOGGLE_TODO";
export const TOGGLE_TODO_SUCCESS = "TOGGLE_TODO_SUCCESS";
export const TOGGLE_TODO_ERROR = "TOGGLE_TODO_ERROR";

export const TRY_DELETE_TODO = "TRY_DELETE_TODO";
export const DELETE_TODO_SUCCESS = "DELETE_TODO_SUCCESS";
export const DELETE_TODO_ERROR = "DELETE_TODO_ERROR";

export const REQUEST_TODO = "REQUEST_TODO";
export const FETCH_TODO = "FETCH_TODO";
export const FETCH_TODO_SUCCESS = "FETCH_TODO_SUCCESS";
export const FETCH_TODO_ERROR = "FETCH_TODO_ERROR";

// AJOUTER TODO

export const tryAddTodo = (todo) => {
  return (dispatch, getState) => {
    const todos = [...getState().todoReducer.data, todo];
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

export const tryDeleteTodo = (index) => {
  return (dispatch, getState) => {
    const myTodos = [
      ...getState().todoReducer.data.filter((todo, i) => i !== index),
    ];
    return apiFirebase.put("todos.json", myTodos).then(
      (response) => dispatch(deleteTodoSuccess(index)),
      (error) => dispatch(deleteTodoError(error))
    );
  };
};

export const deleteTodoSuccess = (index) => {
  return {
    type: DELETE_TODO_SUCCESS,
    index,
  };
};

export const deleteTodoError = (error) => {
  return {
    type: DELETE_TODO_ERROR,
    error,
  };
};

// TOGGLE TODO

export const tryToggleTodo = (index) => {
  return (dispatch, getState) => {
    const toggleIndex = [
      ...getState().todoReducer.data.map((todo, i) =>
        i === index ? { ...todo, done: !todo.done } : todo
      ),
    ];
    return apiFirebase.put("todos.json", toggleIndex).then(
      (response) => dispatch(toggleTodoSuccess(index)),
      (error) => dispatch(toggleTodoError(error))
    );
  };
};

export const toggleTodoSuccess = (index) => {
  return {
    type: TOGGLE_TODO_SUCCESS,
    index,
  };
};

export const toggleTodoError = (error) => {
  return {
    type: TOGGLE_TODO_ERROR,
    error,
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
