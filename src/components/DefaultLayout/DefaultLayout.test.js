import React from "react";

import DefaultLayout from ".";
import { renderWithRouter } from "../../setupTests";
import { fireEvent, wait } from "@testing-library/react";

const TestComponent = () => <div>Test Component</div>;

describe("DefaultLayout", () => {
  let expectedSnapshot;
  let header;
  let content;
  let hamburger;
  let chevron;

  beforeEach(() => {
    const { getByTestId, asFragment } = renderWithRouter(
      <DefaultLayout exact path="/" component={TestComponent} />
    );
    header = getByTestId("header");
    content = getByTestId("content");
    hamburger = getByTestId("hamburger");
    chevron = getByTestId("chevron");
    expectedSnapshot = asFragment();
  });

  test("should be created", () => {
    expect(expectedSnapshot).toMatchSnapshot();
  });

  test("should contain header", () => {
    expect(header).toBeInTheDocument();
  });
  test("should contain chosen component", () => {
    expect(content).toBeInTheDocument();
  });

  test("drawer appears and disappears when clicking menu button", async () => {
    expect(hamburger).toBeVisible();
    fireEvent.click(hamburger);
    expect(hamburger).not.toBeVisible();

    fireEvent.click(chevron);
    expect(hamburger).toBeVisible();
  });
});
