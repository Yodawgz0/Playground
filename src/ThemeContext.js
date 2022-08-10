import React, { useContext, useState } from "react";
export const ThemeContext = React.createContext();
export const ThemeContextUpdator = React.createContext();

export function useTheme() {
  return useContext(ThemeContext);
}

export function useThemeUpdater() {
  return useContext(ThemeContextUpdator);
}

export function ThemeProvider({ children }) {
  const [darkTheme, setDarkTheme] = useState(true);

  function toggleTheme() {
    setDarkTheme((themeValue) => !themeValue);
  }

  return (
    <ThemeContext.Provider value={darkTheme}>
      <ThemeContextUpdator.Provider value={toggleTheme}>
        {children}
      </ThemeContextUpdator.Provider>
    </ThemeContext.Provider>
  );
}
