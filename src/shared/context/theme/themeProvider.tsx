import { createContext, useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";

interface ThemeContextType {
  theme: string;
  setTheme: ((theme: string) => void);
}

export const ThemeContext = createContext<ThemeContextType>({ theme: 'light', setTheme: () => null  });

const getInitialTheme = () => {
  if (typeof window !== "undefined" && window.localStorage) {
    const storedPrefs = window.localStorage.getItem("color-theme");
    if (typeof storedPrefs === "string") {
      return storedPrefs;
    }
    const userMedia = window.matchMedia("(prefers-color-scheme: dark)");
    if (userMedia.matches) {
      return "dark";
    }
  }
  return "light";
};

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<string>(getInitialTheme);

  const rawSetTheme = (theme: string) => {
    const root = window.document.documentElement;
    const isDark = theme === "dark";

    root.classList.remove(isDark ? "light" : "dark");
    root.classList.add(theme);

    localStorage.setItem("color-theme", theme);
  };

  useEffect(() => {
    rawSetTheme(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
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
    </ThemeContext.Provider>
  );
};
