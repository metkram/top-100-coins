import { createStore, combineReducers, applyMiddleware } from "redux";
import { topCoinsReducer } from "./topCoinsReducer";
import { coinReducer } from "./coinReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  coins: topCoinsReducer,
  coin: coinReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
