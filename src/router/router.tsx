
import AnonymousRoute from "@/pages/anonymousRoute/AnonymousRoute";
import Home from "@/pages/home/Home";
import Login from "@/pages/login/Login";
import Registration from "@/pages/registration/Registration";
import RequireAuth from "@/pages/requireAuth/RequireAuth";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RequireAuth />,
    children: [{ index: true, element: <Home /> }],
  },
  {
    element: <AnonymousRoute />,
    children: [
      {
        path: "signup",
        element: <Registration />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);
