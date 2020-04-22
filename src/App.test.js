import React from "react";
import { renderWithProviders } from "setupTests";

import App from "App";

describe("routing", () => {
  test("render homepage on '/' route", () => {
    const { history } = renderWithProviders()(<App />);

    expect(history.location.pathname).toEqual("/");
  });
  test("when route doesn't match, redirect to '/'", async () => {
    const { history } = renderWithProviders()(<App />, {
      route: "/THIS_ROUTE_IS_INVALID",
    });
    expect(history.location.pathname).toEqual("/");
  });
});
