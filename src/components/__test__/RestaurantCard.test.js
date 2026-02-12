import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import RestaurantCard from "../RestaurantCard";
import "@testing-library/jest-dom";
import MOCK_DATA from "../mocks/resCardMock.json";
import UserContext from "../../utils/UserContext";

it("should render RestaurantCard component with props", () => {
  render(
    <MemoryRouter>
      <UserContext.Provider value={{ loggedInUser: "Test User" }}>
        <RestaurantCard resData={MOCK_DATA} />
      </UserContext.Provider>
    </MemoryRouter>
  );

  const name = screen.getByText("Pizza Paradise");
  expect(name).toBeInTheDocument();
});
