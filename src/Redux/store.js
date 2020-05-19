import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "./rootReducer";
import logger from "redux-logger";

const middlewares = [logger, thunkMiddleware];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
