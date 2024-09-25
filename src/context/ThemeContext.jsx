import {createContext, useEffect, useState} from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || "light-theme"
  });

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  function handleToggleTheme() {
    setTheme((theme) => theme === "light-theme" ? "dark-theme" : "light-theme")
  }

  return(
    <ThemeContext.Provider value={{ theme, handleToggleTheme}}>{children}</ThemeContext.Provider>
  )
}
