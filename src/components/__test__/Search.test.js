import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Body from "../Body";
import "@testing-library/jest-dom";
import MOCK_DATA from "../mocks/mockResLisData.json";
import UserContext from "../../utils/UserContext";
import useOnlineStatus from "../../utils/useOnlineStatus";

jest.mock("../../utils/useOnlineStatus");


beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(MOCK_DATA), 
    })
  );

  useOnlineStatus.mockReturnValue(true);
});

afterEach(() => {
  jest.restoreAllMocks();
});

it("should render Body component with Search", async () => {
  render(
    <MemoryRouter>
      <UserContext.Provider
        value={{ loggedInUser: "Test User", setUserName: jest.fn() }}
      >
        <Body />
      </UserContext.Provider>
    </MemoryRouter>
  );

  const searchBtn = await screen.findByRole("button", {
    name: /search/i,
  });

  expect(searchBtn).toBeInTheDocument();
  expect(searchBtn).toHaveTextContent("Search");
});
