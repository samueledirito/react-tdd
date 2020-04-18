import React from "react";

import DefaultLayout from ".";
import { renderWithRouter } from "../../setupTests";

const TestComponent = () => <div data-testid="content">Test Component</div>;

describe("DefaultLayout", () => {
  let header;
  let content;

  beforeEach(() => {
    const { getByTestId } = renderWithRouter(
      <DefaultLayout exact path="/" component={TestComponent} />
    );
    header = getByTestId("header");
    content = getByTestId("content");
  });

  test("should contain header", () => {
    expect(header).toBeInTheDocument();
  });
  test("should contain chosen component", () => {
    expect(content).toBeInTheDocument();
  });
});
