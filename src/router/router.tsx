import { createBrowserRouter } from "react-router-dom";
import Messages from "@/pages/messages/Messages";
import { Chat, CreateChat, Edit, Home, Login, Profile, Registration } from "@/pages";
import { AnonymousRoute, RequireAuth } from "@/components";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RequireAuth />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "messages",
        element: <Messages />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "profile/edit",
        element: <Edit />,
      },
      {
        path: "messages/:chatId",
        element: <Chat />,
      },
      {
        path: "create-chat",
        element: <CreateChat />,
      },
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
