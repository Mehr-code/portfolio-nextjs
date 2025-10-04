"use client";
import React, { useCallback, useEffect, useState } from "react";
import cn from "classnames";

// Navbar items (with IDs for scroll targets and labels for display)
const navItems = [
  { id: "home", label: "خانه" },
  { id: "skills", label: "مهارت‌ها" },
  { id: "projects", label: "پروژه‌ها" },
  { id: "testimonials", label: "رضایت کاربران" },
  { id: "experience", label: "سابقه کاری" },
  { id: "contact", label: "تماس" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // state for mobile menu toggle
  const [activeSection, setActiveSection] = useState("home"); // current active section
  const [isDark, setIsDark] = useState(false); // dark mode state

  useEffect(() => {
    setActiveSection("home");
    // check if "dark" class exists on body
    const _body = document.querySelector("body");
    setIsDark(_body?.classList.contains("dark") ?? false);
  }, []);

  // Smooth scroll to section
  const scrollToSection = useCallback((sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section?.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, []);

  return (
    <div className="fixed top-12 md:right-1/2 md:translate-x-1/2 right-0 mx-auto flex flex-col gap-2.5 items-center z-50">
      {/* Mobile menu button */}
      <button
        className="bg-[var(--background)] card-shadow p-3 md:hidden rounded z-50 md:right-auto md:left-1/2 md:-translate-x-1/2"
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
      >
        {/* Menu icon changes based on dark/light mode */}
        {/*eslint-disable-next-line @next/next/no-img-element*/}
        <img
          src={isDark ? "/menu_icon_dark.svg" : "/menu_icon_light.svg"}
          alt="menu icon"
          width={20}
          height={20}
          className="transform scale-x-[-1]"
        />
      </button>

      {/* Navbar */}
      <nav
        className={cn(
          "bg-[var(--background)] card-shadow p-3 rounded transition-all duration-300 ease-in-out z-50",
          {
            // Mobile toggle
            "opacity-100 translate-y-0": isOpen,
            "opacity-0 -translate-y-2 pointer-events-none": !isOpen,

            // Desktop: always visible
            "md:opacity-100 md:translate-y-0 md:pointer-events-auto md:block":
              true,
          }
        )}
      >
        <ul className="flex flex-col items-center gap-4 text-lg font-normal md:flex-row-reverse">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                className={cn(
                  "rounded p-1 px-3 duration-300 ease-out whitespace-nowrap cursor-pointer", // prevent text wrapping
                  {
                    "bg-[var(--primary)] text-white": activeSection === item.id, // active state
                  }
                )}
                onClick={() => {
                  setActiveSection(item.id); // set active nav item
                  scrollToSection(item.id); // smooth scroll
                  setIsOpen(false); // close mobile menu after click
                }}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
