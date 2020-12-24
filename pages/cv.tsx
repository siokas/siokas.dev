import React from "react";
import { cvs } from "./../data/cvs";
import Head from "next/head";
import Command from "./../components/Command";
import Terminal from "./../components/Terminal";
import ToggleSwitch from "./../components/Toggle-Switch";
import Navigation from "./../components/Navigation";
import { BasicTerminalCommand } from "./../utils/Interfaces";

export default function Cv() {
  return (
    <>
      <Head>
        <title>Apostolos Siokas - CV</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-full md:w-1/2 mx-auto px-4">
        <div className="flex pb-5">
          <ToggleSwitch />
        </div>
        <div className="md:flex mx-auto">
          <Navigation />
        </div>

        <Terminal title="siokas@cv" path="~/cv">
          <Command textColor="text-blue-dark">
            <span>~/Documents/Cv</span>
          </Command>
          <Command
            icon="arrow-right"
            iconSize="3"
            iconColor="text-yellow-light"
          >
            <span className="text-grey ml-2">ls</span>
          </Command>
          {cvs.map((cv: BasicTerminalCommand) => {
            return (
              <Command
                key={cv.link}
                icon={cv.icon}
                textColor={cv.textColor}
                iconColor={cv.iconColor}
                customCss="ml-2 pb-1 md:inline"
              >
                <a
                  className="text-blue-dark no-underline mx-2"
                  target="_blank"
                  href={cv.link}
                >
                  {cv.title}
                </a>
              </Command>
            );
          })}
        </Terminal>
      </div>
    </>
  );
}
