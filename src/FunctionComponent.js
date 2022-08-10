import React from "react";

import { useTheme, useThemeUpdater } from "./ThemeContext";

export default function FunctionContextComponent() {
  const darkTheme = useTheme();
  const toggleTheme = useThemeUpdater();
  const themestyles = {
    color: darkTheme ? "red" : "blue"
  };

  return (
    <>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <div style={themestyles}>it is visible</div>
      <button
        onClick={() => {
          console.log(darkTheme);
        }}
      >
        show theme
      </button>
    </>
  );
}
