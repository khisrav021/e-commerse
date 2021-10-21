import { createStore, applyMiddleware, compose } from "redux";
import { rootReducer } from "./rootReducer";
import thunk from "redux-thunk";
import logger from "redux-logger";

const middlewares = [thunk, logger]

// export const store = createStore(rootReducer,applyMiddleware(thunk));
export const store = compose(applyMiddleware(...middlewares))(createStore)(rootReducer);