


import { createBrowserRouter } from "react-router-dom";
import Messages from "@/pages/messages/Messages";
import { Home, Login, Profile, Registration } from "@/pages";
import { AnonymousRoute, RequireAuth } from "@/components";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RequireAuth />,
    children: [{ index: true, element: <Home /> },
      {
        path: 'profile',
        element: <Profile />
      },
      {
        path: 'messages',
        element: <Messages />
      }
    ],
  },
  {
    element: <AnonymousRoute />,
    children: [
      {
        path: "/signup",
        element: <Registration />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);
