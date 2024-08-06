import React from "react";
import ReactDOM from "react-dom/client";
import "@/styles/globals.css";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { router } from "@/router";
import { store } from "./store";
import { ThemeProvider } from "./shared";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
