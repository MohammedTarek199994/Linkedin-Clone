import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import rootReducer from "../reducers";
import logger from "redux-logger";

const store = createStore(rootReducer, applyMiddleware(logger,reduxThunk));
export default store;