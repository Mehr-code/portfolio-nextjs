import React from "react";
import skills from "@/data/skills.json";
import SectionContainer from "../Section/SectionContainer";
import SectionHeader from "../Section/SectionHeader";
import Skill from "./Skill";
import Image from "next/image";

const Skills = () => {
  return (
    <SectionContainer id="skills">
      <div className="section-contents mx-[22px] md:mx-[116px]">
        <SectionHeader
          plainText="هایی که ایده های من رو شکل میدن ✨"
          highlightText="تکنولوژی"
        />
        <div className="card md:w-[70%] w-[90%] mt-1 px-[33px] py-[27px] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[19px] md:gap-[33px]">
          {skills.map((skill, id) => (
            <Skill key={id} name={skill.name} icon={skill.icon} />
          ))}
        </div>
      </div>
      <>
        <Image
          src="/tech_stack_grid_dark.svg"
          alt="tech stack bg"
          width={569}
          height={373}
          className="hidden dark:md:block -z-10 absolute -right-[135px] -top-[0px] transform scale-x-[-1]"
        />
        <Image
          src="/tech_stack_grid.svg"
          alt="tech stack bg"
          width={569}
          height={373}
          className="hidden dark:hidden md:block -z-10 absolute right-0 -top-0 transform scale-x-[-1]"
        />
      </>
    </SectionContainer>
  );
};

export default Skills;
