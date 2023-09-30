import { createBrowserRouter, Navigate } from "react-router-dom";
import GuestLayout from "../layouts/ClientLayout";
import WelcomeView from "../views/client/WelcomeView";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../views/auth/Login";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <GuestLayout />,
    children: [
      {
        path: "/",
        element: <WelcomeView />,
      },
    ],
  },
  {
    path: "/",
    element: <AuthLayout/>,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },

]);

export default routes;
