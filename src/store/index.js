import { applyMiddleware, combineReducers } from "redux";
import { createStore } from "redux";
import * as reducers from "./reducers";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";

const appReducer = combineReducers(reducers);

const middlewares = [thunkMiddleware];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

let store = createStore(
  appReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);

store.asyncReducers = {};

const createInjectReducers = (store) => (key, reducer) => {
  store.asyncReducers[key] = reducer;
  store.replaceReducer(
    combineReducers({ ...reducers, ...store.asyncReducers })
  );
};
export const injectReducer = createInjectReducers(store);


export default store;
