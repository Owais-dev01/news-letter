import React from "react";
import { ContentSection } from "./sections/ContentSection/ContentSection";
import { FooterSection } from "./sections/FooterSection/FooterSection";
import { HeaderSection } from "./sections/HeaderSection/HeaderSection";
import { HeroSection } from "./sections/HeroSection";

export const Home = (): JSX.Element => {
  return (
    <div className="bg-white w-full min-w-[1600px] min-h-[2630px] flex flex-col">
      <HeaderSection />
      <HeroSection />
      <ContentSection />
      <FooterSection />
    </div>
  );
};
