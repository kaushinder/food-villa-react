import React, { lazy, Suspense, useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.jsx";
import Body from "./components/Body.jsx";
import Contacts from "./components/Contacts.jsx";
import Cart from "./components/Cart.jsx";
import Error from "./components/Error.jsx";
import Login from "./components/Login.jsx";
import Signup from "./components/Signup.jsx";
import RestaurantMenu from "./components/RestaurantMenu.jsx";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "./index.css";
import Footer from "./components/Footer.jsx";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.js";
import { AuthProvider } from "./utils/AuthContext.jsx";
import UserContext from "./utils/UserContext.jsx";

// Code Splitting - Lazy loading components
const Grocery = lazy(() => import("./components/Grocery.jsx"));
const About = lazy(() => import("./components/About.jsx"));

// AppLayout component with Outlet for children routes
const AppLayout = () => {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    // Simulating API call to get user data
    const data = {
      name: "Guest User",
    };
    setUserName(data.name);
  }, []);

  return (
    <Provider store={appStore}>
      <AuthProvider>
        <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
          <div className="app min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
              <Outlet />
            </main>
            <Footer />
          </div>
        </UserContext.Provider>
      </AuthProvider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={
            <div className="flex items-center justify-center min-h-screen">
              <div className="text-xl text-gray-600">Loading...</div>
            </div>
          }>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contacts />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={
            <div className="flex items-center justify-center min-h-screen">
              <div className="text-xl text-gray-600">Loading...</div>
            </div>
          }>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
