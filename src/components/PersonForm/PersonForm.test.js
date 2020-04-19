import React from "react";
import {
  render,
  fireEvent,
  waitFor,
  prettyDOM,
  waitForElement,
  act,
} from "@testing-library/react";

import userEvent from "@testing-library/user-event";
import PersonForm from "./PersonForm";

describe("PersonForm", () => {
  test("should be rendered", () => {
    const { asFragment } = render(<PersonForm />);
    expect(asFragment()).toMatchSnapshot();
  });
  test("name: string!", () => {
    const { getByTestId } = render(<PersonForm />);
    const nameField = getByTestId("personName");
    expect(nameField).toBeInTheDocument();
  });
  test("should disable submit when name is empty", async () => {
    const { container, findByText, getByPlaceholderText } = render(
      <PersonForm person={{ personName: "Marco" }} />
    );
    const nameInput = getByPlaceholderText("Name");
    const submitButton = container.querySelector("button[type=submit]");

    expect(submitButton).toBeDisabled();

    await fireEvent.change(nameInput, { target: { value: "" } });
    await fireEvent.blur(nameInput);

    expect(await findByText(/required/i)).not.toBeNull();

    await fireEvent.change(nameInput, {
      target: { name: "personName", value: "Samuele" },
    });

    expect(await findByText(/required/i)).not.toBeNull();
  });
});
