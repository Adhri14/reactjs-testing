import { screen, render } from "@testing-library/react";
import App from "../App";

test("Testing untuk queryBy dan findBy", async () => {
  render(<App />);
  const txt = screen.queryByText(/Selamat datang/);
  expect(txt).toBeNull();
  const txt2 = await screen.findByText(/Selamat datang/);
  expect(txt2).toBeInTheDocument();
});

test("melakukan render p sebanyak total hari", () => {
  render(<App />);
  const data = screen.getAllByTestId("hari");
  expect(data).toHaveLength(data.length);
});
