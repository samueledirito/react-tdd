import React from "react";

import DefaultLayout from ".";
import { renderWithRouter } from "../../setupTests";

const TestComponent = () => <div data-testid="content">Test Component</div>;

describe("DefaultLayout", () => {
  let header;
  let footer;
  let content;

  beforeEach(() => {
    const { getByTestId } = renderWithRouter(
      <DefaultLayout exact path="/" component={TestComponent} />
    );
    header = getByTestId("header");
    footer = getByTestId("footer");
    content = getByTestId("content");
  });

  test("should contain header", () => {
    expect(header).toHaveTextContent("Header");
  });
  test("should contain footer", () => {
    expect(footer).toHaveTextContent("Footer");
  });
  test("should contain chosen component", () => {
    expect(content).toHaveTextContent("Test Component");
  });
});
