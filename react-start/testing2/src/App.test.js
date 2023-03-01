import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import Header from "./Header";

test("renders learn react link", () => {
  const { fragment } = render(<App text="text" />);

  expect(fragment).toMatchSnapshot();
});

test("updage header text", () => {
  render(<Header text="text" />);
  const button = screen.getByRole("button", { name: "Click me" });
  const message = screen.getByText("text");

  userEvent.click(button);

  expect(message).toHaveTextContent("pass");
});
