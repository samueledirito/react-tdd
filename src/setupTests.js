// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom/extend-expect";

import React from "react";
import { compose } from "recompose";
import { Router } from "react-router-dom";
import { render } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Provider } from "react-redux";
import createMockStore from "redux-mock-store";

const configureStore = createMockStore();

export function renderWithRouter(
  component,
  {
    route = "/",
    history = createMemoryHistory({ initialEntries: [route] }),
  } = {}
) {
  return {
    ...render(<Router history={history}>{component}</Router>),
    history,
  };
}

export function renderWithStore(
  component,
  state = {},
  store = configureStore(state)
) {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
  };
}

const withRouter = (history) => (component) => (
  <Router history={history}>{component}</Router>
);
const withRedux = (state = {}) => (component) => (
  <Provider store={configureStore(state)}>{component}</Provider>
);

export function renderWithProviders(
  {
    route = "/",
    history = createMemoryHistory({ initialEntries: [route] }),
  } = {},
  state = {}
) {
  return function (component) {
    const enhance = compose(withRouter(history), withRedux(state));
    return {
      ...render(enhance(component)),
      history,
    };
  };
}
