import React from "react";
import Head from "next/head";
import Command from "./../components/Command";
import Terminal from "./../components/Terminal";
import ToggleSwitch from "./../components/Toggle-Switch";
import Navigation from "./../components/Navigation";
import { projects } from "../data/projects";
import { BasicTerminalCommand } from "./../utils/Interfaces";

export default function Projects() {
  return (<>
    <Head>
      <title>Apostolos Siokas - Projects</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <div className="w-full md:w-1/2 mx-auto px-4">
      <div className="flex pb-5">
        <ToggleSwitch />
      </div>
      <div className="md:flex mx-auto">
        <Navigation />
      </div>

      <Terminal title="siokas@projects" path="~/projects">
        <Command textColor="text-blue-dark">
          <span>~/Documents/Code/Projects</span>
        </Command>
        <Command icon="arrow-right" iconSize="3" iconColor="text-yellow-light">
          <span className="text-grey ml-2">ls</span>
        </Command>

        {projects.map((project: BasicTerminalCommand) => {
          return (
            <Command
              key={project.link}
              icon={project.icon}
              textColor={project.textColor}
              iconColor={project.iconColor}
              customCss="ml-2 pb-1 md:inline"
            >
              <a
                className="text-blue-dark no-underline mx-2"
                href={project.link}
              >
                {project.title}
              </a>
            </Command>
          );
        })}

        <span className="text-grey-darker">
          # more projects on my&nbsp;
          <a href="https://github.com" className="text-grey-dark">
            github account
          </a>
        </span>
      </Terminal>
    </div>
  </>);
}
