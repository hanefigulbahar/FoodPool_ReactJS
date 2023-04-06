import { Provider } from "react-redux";
import userEvent from "@testing-library/user-event";
import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Header from "../../components/Header";
import store from "../../store";
import LoginPage from "../../page/LoginPage";

import HomePage from "../../page/HomePage";

describe("Header", () => {
  describe("Logo", () => {
    test("Clicking on the logo should go to the homepage", () => {
      render(
        <MemoryRouter>
          <Provider store={store}>
            <Header />
          </Provider>
        </MemoryRouter>
      );

      const logo = screen.getByTestId("home-button");
      expect(logo.getAttribute("href")).toBe("/");
    });
  });

  describe("Basket", () => {
    test("Should appear when the mouse hovers over it", () => {
      render(
        <Provider store={store}>
          <MemoryRouter>
            <Header />
          </MemoryRouter>
        </Provider>
      );

      const button = screen.getByTestId("home-basket");
      userEvent.hover(button);

      const state = store.getState();
      expect(state.basket.basketStatus).toEqual(true);
    });

    test("Should not be visible when the mouse hovers over it", () => {
      render(
        <Provider store={store}>
          <MemoryRouter>
            <Header />
          </MemoryRouter>
        </Provider>
      );

      const button = screen.getByTestId("home-basket");
      fireEvent.mouseLeave(button);

      const state = store.getState();
      expect(state.basket.basketStatus).toEqual(false);
    });

    test("Loading screen should not be shown when data arrives", async () => {
      render(
        <MemoryRouter>
          <Provider store={store}>
            <HomePage />
          </Provider>
        </MemoryRouter>
      );
      await fetch("http://localhost:3000/restaurants");
      const state = store.getState();
      expect(state.loadings.loading).toBe(false);
    });
  });

  describe("Login", () => {
    test("Should go to the Login page when clicked", async () => {
      render(
        <MemoryRouter>
          <Provider store={store}>
            <Header />
            <LoginPage />
          </Provider>
        </MemoryRouter>
      );
      const loginBtn = screen.getByTestId("home-login");
      userEvent.click(loginBtn);

      await screen.findByText("Welcome Dear!");
    });

    test("should show user name on the login button when user login", async () => {
      render(
        <MemoryRouter>
          <Provider store={store}>
            <Header />
            <LoginPage />
          </Provider>
        </MemoryRouter>
      );
      const loginBtn = screen.getByTestId("home-login") as HTMLButtonElement;
      userEvent.click(loginBtn);
      const mailInput = screen.getByTestId("login-email") as HTMLInputElement;
      userEvent.type(mailInput, "hanefi@mail.com");
      const loginNextBtn = screen.getByTestId(
        "login-next"
      ) as HTMLButtonElement;
      userEvent.click(loginNextBtn);
      const passwordInput = screen.getByTestId(
        "login-password"
      ) as HTMLInputElement;
      userEvent.type(passwordInput, "123");
      const loginFinishedBtn = screen.getByTestId(
        "login-finished"
      ) as HTMLButtonElement;
      userEvent.click(loginFinishedBtn);

      expect((await screen.findByText("Hanefi")).textContent).toBe("Hanefi");
    });
  });
});
