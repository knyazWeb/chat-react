import Login from "@/pages/login/Login";
import Registration from "@/pages/registration/Registration";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "signup",
    element: <Registration />,
  },
  {
    path: "login",
    element: <Login />,
  },
]);
