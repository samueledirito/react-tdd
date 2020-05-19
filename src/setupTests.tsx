// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom/extend-expect";

import React, { FunctionComponent } from "react";
import { compose } from "recompose";
import { Router, RouteComponentProps } from "react-router-dom";
import { render } from "@testing-library/react";
import { createMemoryHistory, MemoryHistory } from "history";
import { Provider } from "react-redux";
import createMockStore from "redux-mock-store";
import { INITIAL_STATE } from "./ducks/store";

type RenderWithRouterProps = { route?: string; history?: MemoryHistory };

const configureStore = createMockStore();

export function renderWithRouter<P extends object>(
  component: React.ComponentType<P>,
  {
    route = "/",
    history = createMemoryHistory({ initialEntries: [route] }),
  }: RenderWithRouterProps = {}
) {
  return {
    ...render(<Router history={history}>{component}</Router>),
    history,
  };
}

export function renderWithStore<P extends object>(
  component: React.ComponentType<P> | React.ReactElement,
  state = INITIAL_STATE,
  store = configureStore(state)
) {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
  };
}

const withRouter = <Props extends object>(history: MemoryHistory) => (
  component: React.Component<Props>
) => <Router history={history}>{component}</Router>;

const withRedux = <Props extends object>(state = {}) => (
  component: React.Component<Props>
) => <Provider store={configureStore(state)}>{component}</Provider>;

export function renderWithProviders(
  {
    route = "/",
    history = createMemoryHistory({ initialEntries: [route] }),
  }: RenderWithRouterProps = {},
  state = {}
) {
  return function <Props extends object>(component: React.Component<Props>) {
    const enhance = compose(withRouter(history), withRedux(state));
    return {
      ...render(enhance(component)),
      history,
    };
  };
}
