import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Router } from "react-router-dom";
import { createHashHistory } from "history";
import { createStore } from "redux";
import { Provider } from "react-redux";

const rootReducer = (state, action) => state;

const history = createHashHistory();
const store = createStore(rootReducer, {});

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
