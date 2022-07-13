import { combineReducers, createStore } from "redux";

import * as reducer from "./reducer";
const rootReducer = combineReducers({
  ...reducer,
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION && window.__REDUX_DEVTOOLS_EXTENSIO()
);
