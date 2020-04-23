/* istanbul ignore file */
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Router } from "react-router-dom";
import { createHashHistory } from "history";
import { createStore } from "redux";
import { Provider } from "react-redux";

interface Action {
  type: string;
}

const INITIAL_STATE = { isAuthenticated: false, profile: null };
const rootReducer = (state = INITIAL_STATE, action: Action) => {
  if (!action.type) throw Error("action type not provided");
  return state;
};
export type RootState = ReturnType<typeof rootReducer>;

const history = createHashHistory();
const store = createStore(rootReducer, INITIAL_STATE);

ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
