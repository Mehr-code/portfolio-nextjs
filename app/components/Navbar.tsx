"use client";
import React, { useCallback, useEffect, useState } from "react";
import cn from "classnames";
const navItems = [
  { id: "home", label: "خانه" },
  { id: "skills", label: "مهارت‌ها" },
  { id: "projects", label: "پروژه‌ها" },
  { id: "testimonials", label: "رضایت کاربران" },
  { id: "experience", label: "سابقه کاری" },
  { id: "contact", label: "تماس" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  useEffect(() => {
    setActiveSection("home");
  }, []);

  const scrollToSection = useCallback((sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section?.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, []);

  return (
    <div className="fixed top-12 right-6 mx-auto flex flex-col gap-2.5 items-center">
      <button
        className="bg-background card-shadow p-3 md:hidden rounded z-50 md:right-auto md:left-1/2 md:-translate-x-1/2"
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
      >
        {/*eslint-disable-next-line @next/next/no-img-element
         */}
        <img
          src="/menu_icon_light.svg"
          alt="menu icon"
          width={20}
          height={20}
          className="block transform scale-x-[-1] dark:hidden"
        />
        {/*eslint-disable-next-line @next/next/no-img-element
         */}
        <img
          src="/menu_icon_dark.svg"
          alt="menu icon"
          width={20}
          height={20}
          className="transform scale-x-[-1] hidden dark:block"
        />
      </button>
      <nav
        className={cn(
          "bg-background card-shadow p-3 rounded transition-all duration-300 ease-in-out",
          {
            // موبایل
            "opacity-100 translate-y-0": isOpen,
            "opacity-0 -translate-y-2 pointer-events-none": !isOpen,

            // دسکتاپ همیشه روشن
            "md:opacity-100 md:translate-y-0 md:pointer-events-auto md:block":
              true,
          }
        )}
      >
        <ul className="flex flex-col items-center gap-4 text-lg font-normal md:flex-row">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                className={cn("rounded p-1", {
                  "bg-[#00abef] text-white": activeSection === item.id,
                })}
                onClick={() => {
                  setActiveSection(item.id);
                  scrollToSection(item.id);
                  setIsOpen(false);
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
