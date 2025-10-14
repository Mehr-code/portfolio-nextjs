"use client";
import React, { useState, useEffect } from "react";
import experiences from "@/data/experiences.json";
import SectionContainer from "../Section/SectionContainer";
import SectionHeader from "../Section/SectionHeader";
import Experience from "./Experience";
import Image from "next/image";

function Experiences() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Detect dark mode by checking "dark" class on <body>
    const _body = document.querySelector("body");
    setIsDark(_body?.classList.contains("dark") ?? false);
  }, []);
  return (
    <SectionContainer id="experiences">
      <div className="section-contents mb-[66px] md:mb-[43px] md:mx-[64px]">
        <SectionHeader plainText="من چی بوده؟💼" highlightText="گذشته کاری" />
        <div className="lg:w-[80%] w-full px-6 md:px-[52px] flex flex-col gap-5">
          {experiences.map((experience, id) => (
            <Experience
              key={id}
              image={experience.image}
              compony={experience.company}
              dates={experience.dates}
              role={experience.role}
              description={experience.description}
              id={id}
            />
          ))}
        </div>
      </div>
      <div
        className={`circle-icon h-14 w-14 top-[77px] right-1.5 md:top-[153px] md:right-[190px] -z-10 ${
          isDark ? `bg-[#0000004b]` : `bg-[#cce9fce8]`
        }`}
        style={{ animation: "float1 3s ease-in-out infinite" }}
      >
        <Image
          src="/bracket_icon.svg"
          alt="bracket icon"
          width={23}
          height={23}
        />
      </div>
      <div
        className={`circle-icon h-14 w-14 bottom-0 left-1.5 md:left-[180px] -z-10 ${
          isDark ? `bg-[#0000004b]` : `bg-[#cce9fce8]`
        }`}
        style={{ animation: "float2 3s ease-in-out infinite" }}
      >
        <Image
          src="/electricity_icon.svg"
          alt="electricity icon"
          width={23}
          height={23}
        />
      </div>
    </SectionContainer>
  );
}

export default Experiences;
