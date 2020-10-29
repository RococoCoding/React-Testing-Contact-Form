import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("renders App without crashing", () => {
  render(<App />);
  const firstName = screen.getByLabelText(/first Name/i);
  const lastName = screen.getByLabelText(/last Name/i);
  const email = screen.getByLabelText(/email/i);
  const message = screen.getByLabelText(/message/i);
  const submit = screen.getByRole(/button/i)

  fireEvent.change(firstName, {target: {value: "Alice"}});
  fireEvent.change(lastName, {target: {value: "Chang"}});
  fireEvent.change(email, {target: {value: "email@email.com"}});
  fireEvent.change(message, {target: {value: "I ahve a message for you.w"}});

  async ()=> {
    fireEvent.click(submit);
    await clearedFields (() => {
      expect(firstName).toBeEmpty();
      expect(lastName).toBeEmpty();
      expect(email).toBeEmpty();
      expect(message).toBeEmpty();
      screen.getByText("Alice");
      screen.getByText("Chang");
      screen.getByText("email@email.com");
      screen.getByText("I ahve a message for you.w");
    });
  };
});
