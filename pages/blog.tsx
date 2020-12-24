import React from "react";
import Head from "next/head";
import Command from "./../components/Command";
import Terminal from "./../components/Terminal";
import ToggleSwitch from "./../components/Toggle-Switch";
import Navigation from "./../components/Navigation";
import { blogs } from "./../data/blogs";
import { BasicTerminalCommand } from "./../utils/Interfaces";

export default function Blog() {
  return (<>
    <Head>
      <title>Apostolos Siokas - Blog</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <div className="w-full md:w-1/2 mx-auto px-4">
      <div className="flex pb-5">
        <ToggleSwitch />
      </div>
      <div className="md:flex mx-auto">
        <Navigation />
      </div>

      <Terminal title="@siokas@blog" path="~/blog">
        <Command textColor="text-blue-dark">
          <span>~/Documents/Blog</span>
        </Command>
        <Command icon="arrow-right" iconSize="3" iconColor="text-yellow-light">
          <span className="text-grey ml-2">ls</span>
        </Command>
        {blogs.map((blog: BasicTerminalCommand) => {
          return (
            <Command
              key={blog.link}
              icon={blog.icon}
              textColor={blog.textColor}
              iconColor={blog.iconColor}
              customCss="ml-2 pb-1 md:inline"
            >
              <a className="text-blue-dark no-underline mx-2" href={blog.link}>
                {blog.title}
              </a>
            </Command>
          );
        })}
      </Terminal>
    </div>
  </>);
}
