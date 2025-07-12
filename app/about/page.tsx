import React from "react";
import Sub_banner from "../clients/_component/Sub_banner";
import About_Section from "./_component/About_Section";
import Hero from "@/components/web/Hero";

const page = () => {
  return (
    <div>
      {/* <Sub_banner vedieoLink="/asset/about_banner1.mp4" title="About Us" description=""/> */}
      <Hero
        vedieoLink="/asset/about_banner1.mp4"
        title="About Us"
        description=""
      />
      <About_Section />
    </div>
  );
};

export default page;
