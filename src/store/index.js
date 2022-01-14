import { applyMiddleware, combineReducers } from "redux";
import { createStore } from "redux";
import * as reducer from "./reducers";

const reducers = combineReducers(reducer);

// Middlewares
const firstMiddleware = (dispatch, getState) => (next) => (action) => {
  console.log("Action 1: ", action);
  return next(action);
};

const secondMiddleware = (dispatch, getState) => (next) => (action) => {
  console.log("Middleware-2 does something else");
  return next(action);
};

let store = createStore(
  reducers,
  applyMiddleware(firstMiddleware, secondMiddleware)
);

//* Correspond à applyMiddleware():
// const showActionsMiddleware = (store, middlewares) => {
//   const myMiddlewares = [...middlewares];
//   myMiddlewares.reverse();
//   let dispatch = store.dispatch;
//   myMiddlewares.forEach(
//     (middleware) => (dispatch = middleware(store)(dispatch))
//   );
//   return {
//     ...store,
//     dispatch,
//   };
// };
// store = showActionsMiddleware(store, [firstMiddleware, secondMiddleware]);

export default store;
