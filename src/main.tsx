import React from "react";
import ReactDOM from "react-dom/client";
import "@/styles/globals.css";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { router } from "@/router";
import { store } from "./store";
import { ThemeProvider, ThemeContext } from "./shared";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <ThemeContext.Consumer>
          {({ theme }) => (
            <>
              <RouterProvider router={router} />
              <Toaster
                position="top-right"
                toastOptions={{
                  style: {
                    fontSize: "14px",
                    padding: "10px",
                    ...(theme === "dark" && {
                      borderRadius: "10px",
                      background: "#333",
                      color: "#fff",
                    }),
                  },
                }}
              />
            </>
          )}
        </ThemeContext.Consumer>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
);
