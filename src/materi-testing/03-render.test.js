import SimpleShowHide from "./SimpleShowHide";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";

test("memunculkan seluruh tah HTML dalam APP", () => {
  render(<App />);
  // screen.debug();
  const btn = screen.getAllByRole("button")[0];
  fireEvent.click(btn);
  // screen.debug();
});
