import React from "react";
import { renderWithRouter } from "./setupTests";

import App from "./App";

describe("routing", () => {
  test("render homepage on '/' route", () => {
    const { history } = renderWithRouter(<App />);

    expect(history.location.pathname).toEqual("/");
  });
  test("when route doesn't match, redirect to '/'", async () => {
    const { history } = renderWithRouter(<App />, {
      route: "/THIS_ROUTE_IS_INVALID",
    });
    expect(history.location.pathname).toEqual("/");
  });
});
