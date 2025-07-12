import React from "react";
import Client_About from "./_component/Client_About";
import Logoshowcase from "./_component/Logoshowcase";
import Hero from "@/components/web/Hero";
// import { Particles } from "@/components/magicui/particles";

const page = () => {
  return (
    <div>
      {/* <Sub_banner
        vedieoLink="/asset/banner4.mp4"
        title="OUR CLIENTS"
        description=""
      /> */}
      <Hero
        vedieoLink="/asset/banner4.mp4"
        title="OUR CLIENTS"
        description=""
      />
      <Client_About />
      <Logoshowcase />
      {/* <div className="relative overflow-hidden h-[150px] w-full">
        <Particles
          className="absolute inset-0 z-0"
          quantity={700}
          ease={80}
          color={"#155FFF"}
          refresh
        />
      </div> */}
    </div>
  );
};

export default page;
