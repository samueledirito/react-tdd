import React from "react";

import Home from "screen/Home";
import { renderWithStore } from "setupTests";

describe("SCREEN - Home", () => {
  describe("when profile is not loaded", () => {
    test("should show create button", () => {
      const { queryByText } = renderWithStore(<Home />);
      expect(queryByText("Create Profile")).not.toBeNull();
    });
    test("should hide profile", () => {
      const { queryByText } = renderWithStore(<Home />);
      expect(queryByText("Current Profile")).toBeNull();
    });
  });
  describe("when profile is not loaded", () => {
    test("should hide creation link", () => {
      const { queryByText } = renderWithStore(<Home />, { profile: true });
      expect(queryByText("Create Profile")).toBeNull();
    });
    test("should show profile", () => {
      const { queryByText } = renderWithStore(<Home />, { profile: true });
      expect(queryByText("Current Profile")).not.toBeNull();
    });
  });
});
