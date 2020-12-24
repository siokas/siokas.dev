import React, { useEffect, useState } from "react";

interface Link {
  title: string;
  path: string;
}

function navLinks() {
  const links: Array<Link> = [
    { title: "projects", path: "/projects" },
    { title: "cv", path: "/cv" },
    { title: "blog", path: "/blog" },
    { title: "skills", path: "/skills" },
    { title: "contact", path: "/contact" },
  ];

  return links;
}

function Navigation() {
  const [hideNav, setHideNav] = useState(false);

  useEffect(() => {
    if (window.innerWidth <= 768) {
      setHideNav(true);
    }
  }, []);

  return (
    <nav className="pb-2 mx-auto">
      <div
        className="flex justify-between lg:w-auto w-full pr-2 border-solid lg:pb-0"
      >
        <div className="block lg:hidden">
          <button
            id="nav"
            className="flex items-center px-3 py-2 border-2 rounded text-inherit"
            onClick={(e) => {
              e.preventDefault();
              setHideNav(!hideNav);
            }}
          >
            <svg
              className="fill-current h-3 w-3 text-inherit"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
      </div>
      <div
        className={hideNav
          ? "hidden"
          : "menu lg:block flex-grow lg:flex lg:items-center lg:w-auto lg:px-3"}
      >
        <div className="text-md font-bold lg:flex-grow">
          <div className="inline">
            {navLinks().map((link) => {
              return (
                <a
                  key={link.path}
                  href={link.path}
                  className="block text-inherit mt-3 lg:inline-block lg:mt-0 px-4 rounded no-underline mr-2"
                >
                  {link.title}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
