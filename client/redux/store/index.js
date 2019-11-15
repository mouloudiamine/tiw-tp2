import { createStore, combineReducers, applyMiddleware } from 'redux'
import rootReducer from "../reducers";
import {logger} from "../middleware/Middleware";
const store = createStore(
    rootReducer,
    applyMiddleware(logger)
);
export default store;
