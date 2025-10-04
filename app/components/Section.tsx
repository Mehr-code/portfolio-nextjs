import React from "react";
import Hero from "./Hero/Hero";
import Skills from "./Skills/Skills";

function Section() {
  return (
    <main className="flex flex-col gap-[142px] w-full md:max-w-screen pt-[236px] md:pt-48 mx-auto">
      <Hero />
      <Skills />
    </main>
  );
}

export default Section;
