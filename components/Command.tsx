import React, { useEffect } from "react";
import CustomSVG from "./CustomSVG";

function Command(
  {
    children,
    textColor = "",
    icon = "",
    iconColor = "",
    customCss = "",
    iconSize = "4",
  },
) {
  let img = <></>;
  if (icon !== "") {
    img = <CustomSVG icon={icon} size={iconSize} color={iconColor} />;
  }
  return (
    <div
      className={"pb-1" + (textColor != "" ? " " + textColor : "") +
        (customCss != "" ? " " + customCss : "")}
    >
      {img}
      {children}
    </div>
  );
}

export default Command;
