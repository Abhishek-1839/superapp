import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import ErrorPage from "./routes/404";
import Categories from "./routes/categories";
import DashboardPage from "./routes/dashboard";
import EntertainmentPage from "./routes/entertainment";
import LoginPage from "./routes/login";

const router = createBrowserRouter([
<<<<<<< HEAD
  {
    path: "/",
    element: <DashboardPage />,
    errorElement: <ErrorPage />,
  },
=======
  // {
  //   path: "/",
  //   element: <DashboardPage />,
  //   errorElement: <ErrorPage />,
  // },
>>>>>>> master
  {
    path: "/login",
    element: <LoginPage />,
  },
<<<<<<< HEAD
  {
    path: "/categories",
    element: <Categories />,
  },
=======
  // {
  //   path: "/categories",
  //   element: <Categories />,
  // },
>>>>>>> master
  {
    path: "/entertainment",
    element: <EntertainmentPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
