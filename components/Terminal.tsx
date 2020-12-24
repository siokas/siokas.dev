import React, { useEffect, useState } from "react";
import Command from "./Command";

function Terminal({ children, title, path }) {
  const [fullDate, setFullDate] = useState(new Date().toLocaleString());

  useEffect(() => {
    setFullDate(new Date().toLocaleString());
  });

  return (<>
    <div
      className="w-full shadow-2xl subpixel-antialiased rounded h-64 bg-black border-black mx-auto"
    >
      <div
        className="flex items-center h-6 rounded-t bg-grey-light border-b border-grey text-center text-black"
        id="headerTerminal"
      >
        <div
          className="flex ml-2 items-center text-center border-red-light bg-red-light shadow-inner rounded-full w-3 h-3 hover:bg-red-dark cursor-pointer"
          onClick={() => {
            window.location.href = "/";
          }}
        >
        </div>
        <div
          className="ml-2 border-yellow-light bg-yellow-light shadow-inner rounded-full w-3 h-3 hover:bg-yellow-dark cursor-pointer"
        >
        </div>
        <div
          className="ml-2 border-green-light bg-green-light shadow-inner rounded-full w-3 h-3 hover:bg-green-dark cursor-pointer"
        >
        </div>
        <div className="mx-auto pr-16 md:text-base text-xs">
          <p className="text-center">{title}</p>
        </div>
      </div>
      <div
        className="px-1 pt-1 h-auto xs:text-md md:text-sm bg-black"
        id="console"
      >
        <Command textColor="text-green">
          Last login: {fullDate}
        </Command>
        {children}
      </div>
    </div>
  </>);
}

export default Terminal;
