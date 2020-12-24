import React from "react";
import Head from "next/head";
import Command from "./../components/Command";
import Terminal from "./../components/Terminal";
import ToggleSwitch from "./../components/Toggle-Switch";
import Navigation from "./../components/Navigation";
import { skills } from "./../data/skills";
import { BasicTerminalCommand } from "./../utils/Interfaces";

export default function Skills() {
  return (<>
    <Head>
      <title>Apostolos Siokas - Skills</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <div className="w-full md:w-1/2 mx-auto px-4">
      <div className="flex pb-5">
        <ToggleSwitch />
      </div>
      <div className="md:flex mx-auto">
        <Navigation />
      </div>

      <Terminal title="siokas@skills" path="~/skills">
        <Command textColor="text-blue-dark">
          <span>~/Documents/Code/Skills</span>
        </Command>
        <Command icon="arrow-right" iconSize="3" iconColor="text-yellow-light">
          <span className="text-grey ml-2">ls</span>
        </Command>
        {skills.map((skill: BasicTerminalCommand) => {
          return (
            <Command
              key={skill.link}
              icon={skill.icon}
              iconColor={skill.iconColor}
              textColor={skill.textColor}
              customCss="ml-2 pb-1 md:inline"
            >
              <a className="text-blue-dark no-underline mx-2" href={skill.link}>
                {skill.title}
              </a>
            </Command>
          );
        })}
      </Terminal>
    </div>
  </>);
}
