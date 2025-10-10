import React from "react";
import SectionContainer from "../Section/SectionContainer";
import SectionHeader from "../Section/SectionHeader";
import projects from "@/data/projects.json";
import Project from "./Project";
import Image from "next/image";

function Projects() {
  return (
    <SectionContainer id="projects">
      <div className="section-content mx-6 md:mx-[64px]">
        <SectionHeader
          plainText="هایی که درست کردم ⚙️"
          highlightText="اسباب بازی"
        />
        <div className="flex justify-center items-center min-h-screen">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {projects.map((project, id) => (
              <Project
                key={id}
                thumbnail={project.thumbnail}
                title={project.title}
                link={project.link}
                description={project.description}
                languageIcons={project.languageIcons}
              />
            ))}
          </div>
        </div>
      </div>
      <Image
        src="/projects_highlight2.svg"
        alt="background highlight decoration"
        width={658}
        height={658}
        className="absolute hidden md:block left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-10"
      />
      <Image
        src="/projects_highlight_mobile2.svg"
        alt="mobile background highlight decoration"
        width={321}
        height={321}
        className="absolute block md:hidden top-0 -translate-y-1/2 -z-10"
      />
    </SectionContainer>
  );
}

export default Projects;
