import { render, screen } from "@testing-library/react";
import App from "../App";

test("Menyapa Adhri ada di dalam aplikasi saya", () => {
  render(<App />);
  const text = screen.getByText("Hallo Adhri");
  expect(text).toBeInTheDocument();
});
