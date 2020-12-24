import Head from "next/head";
import Command from "./../components/Command";
import Terminal from "./../components/Terminal";
import ToggleSwitch from "./../components/Toggle-Switch";
import Navigation from "./../components/Navigation";

export default function Home() {
  return (
    <>
      <Head>
        <title>Apostolos Siokas</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="md:w-1/2 mx-auto">
        <div className="flex pb-5">
          <ToggleSwitch />
        </div>
        <div className="md:flex mx-auto">
          <Navigation />
        </div>
        <Terminal title="siokas@root" path="~/">
          <Command textColor="text-blue-dark">
            <span>~/</span>
          </Command>
          <Command
            icon="arrow-right"
            iconSize="3"
            iconColor="text-yellow-light"
          >
            <span className="text-grey ml-2">ls</span>
          </Command>
          <Command
            textColor="text-blue-dark"
            customCss="ml-2"
            icon="markdown"
            iconSize="3"
            iconColor="text-pink-dark"
          >
            <span className="mx-2">README.md</span>
          </Command>
          <Command
            icon="arrow-right"
            iconSize="3"
            iconColor="text-yellow-light"
          >
            <span className="text-grey ml-2">cat README.md</span>
          </Command>
          <Command textColor="text-grey-dark">
            <div className="pb-2">## Navigate through my personal web page</div>
            <div>* All files are links</div>
            <div>* The close window button is a link to this page</div>
            <div>* Light and Dark mode is enabled</div>
          </Command>
        </Terminal>
      </div>
    </>
  );
}
