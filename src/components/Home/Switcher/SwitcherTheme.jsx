import React, { useState } from "react";
import {
  getCurrentThemeName,
  switchTheme,
  useDefaultTheme,
} from "../../../themes/Theme";

import "./SwitcherTheme.sass";

const SwitcherTheme = () => {
  useDefaultTheme();
  const [theme, setTheme] = useState(getCurrentThemeName());
  const handleTheme = (theme) => {
    switchTheme(theme);
    setTheme(getCurrentThemeName());
  };
  return (
    <div className="switcher_theme_container">
      <div className={`holder ${theme}`}></div>
      <div
        className={`block_theme ${theme === "light" ? "light" : ""}`}
        onClick={() => {
          handleTheme("light");
        }}
      >
        Light
      </div>

      <div
        className={`block_theme ${theme === "dark" ? "dark" : ""}`}
        onClick={() => {
          handleTheme("dark");
        }}
      >
        Dark
      </div>
    </div>
  );
};

export default SwitcherTheme;
