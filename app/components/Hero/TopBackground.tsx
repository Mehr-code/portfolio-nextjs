"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

// Array of decorative floating icons with positions, size, and animation
const icons = [
  {
    src: "/rocket_icon.svg", // image path
    top: "12%", // mobile top position
    left: "10%", // mobile left position
    mdTop: "15%", // desktop top position
    mdLeft: "12%", // desktop left position
    size: 30, // icon size
    opacity: 1, // transparency
    mobileVisible: true, // show on mobile
    animation: "float1", // CSS animation name
  },
  {
    src: "/bracket_icon.svg",
    top: "15%",
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
    top: "80%",
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
    mobileVisible: false, // hidden on mobile
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
    mdTop: "90%",
    mdLeft: "10%",
    size: 26,
    opacity: 0.85,
    mobileVisible: false,
    animation: "float3",
  },
];

const TopBackground = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Detect dark mode by checking "dark" class on <body>
    const _body = document.querySelector("body");
    setIsDark(_body?.classList.contains("dark") ?? false);
  }, []);

  return (
    <>
      {/* Container for floating icons */}
      <div className="absolute w-full h-[285px] md:h-[656px] top-[188px] md:top-11 left-1/2 -translate-x-1/2 overflow-hidden">
        <div className="relative w-full h-[285px] md:h-[656px]">
          {icons.map((icon, idx) => (
            <div
              key={idx}
              className={`circle-icon absolute z-20 ${
                isDark ? `bg-[#0000004b]` : `bg-[#cce9fce8]`
              }  ${!icon.mobileVisible ? "hidden md:block" : ""}`}
              style={{
                top: icon.top,
                left: icon.left,
                opacity: icon.opacity,
                animation: `${icon.animation} 3s ease-in-out infinite`, // floating animation
              }}
            >
              <Image
                src={icon.src}
                alt="decorative icon"
                width={icon.size}
                height={icon.size}
                className={
                  !icon.mobileVisible ? "translate-x-1/2 translate-y-1/2" : ""
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

      {/* Highlight image for dark mode (desktop only) */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/top_highlight2.png"
        alt="Top dark mode background highlight"
        width={809}
        height={877}
        className={`absolute top-[-515px] ${
          isDark ? "hidden md:block" : "hidden"
        } left-1/2 -translate-x-1/2`}
      />

      {/* Highlight image for dark mode (mobile only) */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/top_highlight_mobile2.svg"
        alt="Top dark mode background highlight for mobile"
        width={429}
        height={465}
        className={`absolute top-[-229px] ${
          isDark ? "block md:hidden" : "hidden"
        } left-1/2 -translate-x-1/2`}
      />

      {/* Light mode background for desktop */}
      <div
        className={`absolute top-0 w-full h-[795px] bg-repeat-x bg-[url('/top_bg_light.svg')] bg-[auto-auto] hidden ${
          isDark ? "" : "md:block"
        }`}
      />

      {/* Light mode background for mobile */}
      <div
        className={`absolute top-0 w-full h-[600px] bg-repeat-x bg-[url('/top_bg_mobile_light.svg')] bg-[auto-auto] ${
          isDark ? "hidden" : "md:hidden"
        }`}
      />

      {/* Dark mode background for desktop */}
      <div
        className={`absolute top-0 z-10 w-full h-[1200px] bg-repeat-x bg-[url('/top_bg_dark3.svg')] bg-[auto-auto] hidden opacity-70 ${
          isDark ? "md:block" : ""
        }`}
      />

      {/* Dark mode background for mobile */}
      <div
        className={`absolute top-0 z-10 w-full h-[1000px] bg-repeat-x bg-[url('/top_bg_mobile_dark2.svg')] bg-[auto-auto] ${
          isDark ? "md:hidden" : "hidden"
        }`}
      />
    </>
  );
};

export default TopBackground;
