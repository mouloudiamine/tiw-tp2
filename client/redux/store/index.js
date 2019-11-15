import {applyMiddleware, createStore} from "redux";
import rootReducer from "../reducers";
import {logger, propagateSocket} from "../../middleware";

const store = createStore(rootReducer, applyMiddleware(logger, propagateSocket));

export default store;
