import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "../Header.js";
import appStore from "../../utils/appStore.js";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { screen } from "@testing-library/react";

it("should render Header component with login button correctly", () => {
  render(
    <Provider store={appStore}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>,
  );

//    const loginButton = screen.getByText("Login");
    const loginButton = screen.getByRole("button", { name: /Login/i });
    // const loginButton = screen.getByText("Login");
    expect(loginButton).toBeInTheDocument();
});

it("should render Header component with cart Items 0 correctly", () => {
  render(
    <Provider store={appStore}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>,
  );

    const cartItems = screen.getByText("Cart - (0 items)");

    expect(cartItems).toBeInTheDocument();
});


it("should render Header component with cart items correctly", () => {
  render(
    <Provider store={appStore}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>,
  );

    const cartItems = screen.getByText(/Cart/);

    expect(cartItems).toBeInTheDocument();
});

it("should change login button to logout onClick correctly", () => {
  render(
    <Provider store={appStore}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>,
  );

    const loginButton = screen.getByRole("button", { name: "Login" });

    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole("button", { name: "Logout" });

    expect(logoutButton).toBeInTheDocument();

});