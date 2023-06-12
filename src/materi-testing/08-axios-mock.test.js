import { screen, render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";
import axios from "axios";

jest.mock("axios");

it("untuk memastikan list user dengan call api axios", async () => {
  const users = [
    {
      id: 1,
      name: "Adhri",
    },
    {
      id: 2,
      name: "Syaril Kadir",
    },
    {
      id: 3,
      name: "Rizza Fauziah",
    },
  ];
  axios.get.mockImplementation(() => Promise.resolve({ data: users }));

  render(<App />);

  const btnClick = screen.getByTestId("get-user");
  userEvent.click(btnClick);

  await waitFor(() => {
    const getUsers = screen.getAllByTestId("users");
    expect(getUsers).toHaveLength(users.length);
  });
});
