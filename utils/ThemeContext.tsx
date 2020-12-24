import React, { createContext, useContext, useEffect, useState } from "react";

type ThemeContextType = {
  theme: string;
  setTheme: (value: string) => void;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined,
);

export function useTheme() {
  return useContext(ThemeContext);
}

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const savedTheme: string = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  });

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div
        className={"text-main h-screen overflow-hidden flex items-center justify-center theme-" +
          theme}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
}
