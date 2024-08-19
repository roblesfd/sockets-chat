import { useEffect, useState } from "react";
import ThemeContext from "./themeContext";
import Modal from "../components/Modal";

const ThemeProvider = ({ children }) => {
  const themeStorage =
    typeof localStorage !== "undefined" && localStorage.getItem("theme")
      ? JSON.parse(localStorage.getItem("theme"))
      : false;
  const [darkTheme, setDarkTheme] = useState(themeStorage);
  const [renderComponent, setRenderComponent] = useState(false);

  useEffect(() => {
    setRenderComponent(true);
  });

  if (!renderComponent) return <></>;

  return (
    <ThemeContext.Provider value={{ darkTheme, setDarkTheme }}>
      <div className={`${darkTheme ? "dark" : ""} min-h-screen`}>
        <div className="dark:text-primary-30 text-primary-900 dark:bg-primary-600">
          {children}
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
