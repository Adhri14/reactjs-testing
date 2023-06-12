import SimpleShowHide from "./SimpleShowHide";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";

describe("Group untuk testing select element dan dijadikan expect value", () => {
  test("memastikan text yang dirender pertama betul", () => {
    render(<App />);
    const txt = screen.getByText("Saya sedang sembunyi");
    expect(txt).toBeInTheDocument();
  });

  test("memastikan content text sesuai ketika pertama dirender", () => {
    render(<App />);
    const txt = screen.getByText("Tampilkan");
    expect(txt).toBeInTheDocument();
  });
});

describe("Group untuk testing select element untuk diberikan trigger fireEvent", () => {
  test("Memastikan text yang dirender setelah diclick", () => {
    render(<App />);
    const btn = screen.getByText("Tampilkan");
    fireEvent.click(btn);
    const txt = screen.getByText("Saya sedang muncul");
    expect(txt).toBeInTheDocument();
  });
  test("Memastikan text di dalam button sesuai setelah di klik", () => {
    render(<App />);
    const btnPertamaDiRender = screen.getByText("Tampilkan");
    fireEvent.click(btnPertamaDiRender);

    const btnResult = screen.getByText("Sembunyikan");
    expect(btnResult).toBeInTheDocument();
  });
});
