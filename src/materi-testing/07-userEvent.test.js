import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";
import CompUserEvent from "./CompUserEvent";

const MOCK_SUBMIT_BTN = jest.fn();

it("testing onChange user event ketika typing", () => {
  render(<App />);
  const selectInput = screen.getByPlaceholderText("input value");
  userEvent.type(selectInput, "Adhri");
  expect(screen.getByText(/Anda mengetik : Adhri/)).toBeInTheDocument();
});

it("test onClick pada compUserEvent", () => {
  render(<CompUserEvent onSubmit={MOCK_SUBMIT_BTN} />);
  const textSubmit = screen.getByTestId("text-submit");
  userEvent.click(textSubmit);
  expect(MOCK_SUBMIT_BTN).toHaveBeenCalled();
});
