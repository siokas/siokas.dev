import React from "react";
import Head from "next/head";
import Command from "./../components/Command";
import Terminal from "./../components/Terminal";
import ToggleSwitch from "./../components/Toggle-Switch";
import Navigation from "./../components/Navigation";
import { contactLinks } from "./../data/contact";
import { BasicTerminalCommand } from "./../utils/Interfaces";

export default function Contact() {
  return (<>
    <Head>
      <title>Apostolos Siokas - Contact</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <div className="w-full md:w-1/2 mx-auto px-4">
      <div className="flex pb-5">
        <ToggleSwitch />
      </div>
      <div className="md:flex mx-auto">
        <Navigation />
      </div>

      <Terminal title="siokas@contact" path="~/contact">
        <Command textColor="text-blue-dark">
          <span>~/Documents/Contact</span>
        </Command>
        <Command icon="arrow-right" iconSize="3" iconColor="text-yellow-light">
          <span className="text-grey ml-2">ls</span>
        </Command>
        {contactLinks.map((contact: BasicTerminalCommand) => {
          return (
            <Command
              key={contact.link}
              icon={contact.icon}
              textColor={contact.textColor}
              iconColor={contact.iconColor}
              customCss="mr-2 pb-1 md:inline"
            >
              <a
                className="text-blue-dark no-underline mx-2"
                href={contact.link}
              >
                {contact.title}
              </a>
            </Command>
          );
        })}
      </Terminal>
    </div>
  </>);
}
