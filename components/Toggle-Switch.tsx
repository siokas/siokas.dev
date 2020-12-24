import React, { useEffect, useState } from "react";
import { useTheme } from "./../utils/ThemeContext";

function ToggleSwitch() {
  const { theme, setTheme } = useTheme();

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  function getClasses(): string[] {
    if (theme == "light") {
      return ["bg-main justify-start", "bg-grey-lightest"];
    }
    return ["bg-white justify-end", "bg-main"];
  }

  return (
    <div className="flex m-2 mx-auto">
      <span className="mr-2">Light</span>
      <span
        className={"border rounded-full border-grey flex cursor-pointer w-12 " +
          getClasses()[0]}
        onClick={toggleTheme}
      >
        <span
          className={"rounded-full border w-6 h-6 border-grey items-center shadow-inner shadow " +
            getClasses()[1]}
        >
        </span>
      </span>
      <span className="ml-2">Dark</span>
    </div>
  );
}

export default ToggleSwitch;
