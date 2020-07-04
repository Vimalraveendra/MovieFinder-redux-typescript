import { createStore, applyMiddleware } from "redux";
// import thunkMiddleware from "redux-thunk";
import rootReducer from "./rootReducer";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./rootSaga";

// here we are grabbing all the state types from different reducers.
export type AppState = ReturnType<typeof rootReducer>;

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware, logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

export default store;
