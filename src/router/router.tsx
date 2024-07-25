
import AnonymousRoute from "@/components/protectedRoutes/anonymousRoute/AnonymousRoute";
import RequireAuth from "@/components/protectedRoutes/requireAuth/RequireAuth";
import Home from "@/pages/home/Home";
import Login from "@/pages/login/Login";
import Profile from "@/pages/profile/Profile";
import Registration from "@/pages/registration/Registration";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RequireAuth />,
    children: [{ index: true, element: <Home /> },
      {
        path: 'profile',
        element: <Profile />
      }
    ],
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
