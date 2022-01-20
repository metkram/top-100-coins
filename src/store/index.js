import { createStore, combineReducers, applyMiddleware } from "redux";
import { topCoinsReducer } from "./topCoinsReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  coins: topCoinsReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
