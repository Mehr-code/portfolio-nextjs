import React from "react";
import Hero from "./Hero/Hero";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import Testimonials from "./Testimonials/Testimonials";

function Section() {
  return (
    <main className="flex flex-col gap-[142px] w-full md:max-w-screen pt-[236px] md:pt-48 mx-auto">
      <Hero />
      <Skills />
      <Projects />
      <Testimonials />
    </main>
  );
}

export default Section;
