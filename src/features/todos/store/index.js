import { injectReducer } from "../../../store";
import { todoReducer } from "./reducers";

injectReducer("todoReducer", todoReducer);
