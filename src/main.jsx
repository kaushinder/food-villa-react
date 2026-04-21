import React, { lazy, Suspense, useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import Header from "./components/Header.jsx";
import Error from "./components/Error.jsx";
import "./index.css";
import appStore from "./utils/appStore.js";
import { AuthProvider } from "./utils/AuthContext.jsx";
import UserContext from "./utils/UserContext.jsx";
import Shimmer from "./components/Shimmer.jsx";

// ─── Lazy load ALL route-level components ───────────────────────────────────
// Only Header, Error & Shimmer are eager (needed on first paint).
// Everything else loads only when the user navigates to that route.
const Body            = lazy(() => import("./components/Body.jsx"));
const Contacts        = lazy(() => import("./components/Contacts.jsx"));
const Cart            = lazy(() => import("./components/Cart.jsx"));
const Login           = lazy(() => import("./components/Login.jsx"));
const Signup          = lazy(() => import("./components/Signup.jsx"));
const RestaurantMenu  = lazy(() => import("./components/RestaurantMenu.jsx"));
const Footer          = lazy(() => import("./components/Footer.jsx"));
const Grocery         = lazy(() => import("./components/Grocery.jsx"));
const About           = lazy(() => import("./components/About.jsx"));

// Reusable page-level loading fallback (uses existing Shimmer)
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-[60vh]">
    <div className="text-xl text-gray-500 animate-pulse">Loading…</div>
  </div>
);

const AppLayout = () => {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    setUserName("Guest User");
  }, []);

  return (
    <Provider store={appStore}>
      <AuthProvider>
        <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
          <div className="app min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
              {/* Single Suspense boundary wraps all lazy routes */}
              <Suspense fallback={<PageLoader />}>
                <Outlet />
              </Suspense>
            </main>
            {/* Footer is lazy too — not needed for first paint */}
            <Suspense fallback={null}>
              <Footer />
            </Suspense>
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
    errorElement: <Error />,
    children: [
      { path: "/",                   element: <Body /> },
      { path: "/about",              element: <About /> },
      { path: "/contact",            element: <Contacts /> },
      { path: "/grocery",            element: <Grocery /> },
      { path: "/cart",               element: <Cart /> },
      { path: "/restaurants/:resId", element: <RestaurantMenu /> },
      { path: "/login",              element: <Login /> },
      { path: "/signup",             element: <Signup /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRouter} />
);
