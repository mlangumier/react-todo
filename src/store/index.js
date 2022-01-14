import { applyMiddleware, combineReducers } from "redux";
import { createStore } from "redux";
import * as reducer from "./reducers";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension/develop";

const reducers = combineReducers(reducer);

const middlewares = [];
if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

let store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
