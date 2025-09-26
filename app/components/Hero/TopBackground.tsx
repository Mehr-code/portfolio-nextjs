// components/Hero/TopBackground.tsx
import React from "react";
import Image from "next/image";

const icons = [
  {
    src: "/rocket_icon.svg",
    top: "12%",
    left: "10%",
    mdTop: "15%",
    mdLeft: "12%",
    size: 30,
    opacity: 1,
    mobileVisible: true,
    animation: "float1",
  },
  {
    src: "/bracket_icon.svg",
    top: "35%",
    left: "75%",
    mdTop: "30%",
    mdLeft: "70%",
    size: 28,
    opacity: 0.8,
    mobileVisible: true,
    animation: "float2",
  },
  {
    src: "/github_icon.svg",
    top: "60%",
    left: "20%",
    mdTop: "55%",
    mdLeft: "18%",
    size: 34,
    opacity: 1,
    mobileVisible: true,
    animation: "float3",
  },
  {
    src: "/electricity_icon.svg",
    top: "80%",
    left: "85%",
    mdTop: "75%",
    mdLeft: "70%",
    size: 26,
    opacity: 0.7,
    mobileVisible: false,
    animation: "float1",
  },
  {
    src: "/merge_icon.svg",
    top: "25%",
    left: "50%",
    mdTop: "22%",
    mdLeft: "48%",
    size: 24,
    opacity: 0.9,
    mobileVisible: false,
    animation: "float2",
  },
  {
    src: "/stack_icon.svg",
    top: "55%",
    left: "60%",
    mdTop: "50%",
    mdLeft: "55%",
    size: 26,
    opacity: 0.85,
    mobileVisible: false,
    animation: "float3",
  },
];

const TopBackground = () => {
  return (
    <>
      <div className="absolute w-full max-w-[320px] md:max-w-[700px] h-[285px] md:h-[656px] top-[188px] md:top-11 left-1/2 -translate-x-1/2 z-10 overflow-hidden">
        <div className="relative w-full h-[285px] md:h-[656px]">
          {icons.map((icon, idx) => (
            <div
              key={idx}
              className={`circle-icon absolute ${
                !icon.mobileVisible ? "hidden md:block" : ""
              }`}
              style={{
                top: icon.top,
                left: icon.left,
                opacity: icon.opacity,
                animation: `${icon.animation} 3s ease-in-out infinite`,
              }}
            >
              <Image
                src={icon.src}
                alt="decorative icon"
                width={icon.size}
                height={icon.size}
                className={
                  !icon.mobileVisible ? "-translate-x-1/2 translate-y-1/2" : ""
                }
                style={{
                  top: icon.mdTop,
                  left: icon.mdLeft,
                }}
              />
            </div>
          ))}
        </div>
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/top_highlight2.png"
        alt="Top dark mode background highligt"
        width={809}
        height={877}
        className="absolute top-[-515px] hidden dark:md:block left-1/2 -translate-x-1/2"
      />
    </>
  );
};

export default TopBackground;
