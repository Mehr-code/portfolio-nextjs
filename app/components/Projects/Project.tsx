/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";

type Props = {
  thumbnail: string;
  title: string;
  link: { url: string; label: string };
  description: string;
  languageIcons: string[];
};

function Project({
  thumbnail,
  title,
  link,
  description,
  languageIcons,
}: Props) {
  return (
    <div className="card flex flex-col items-stretch w-full max-w-[428.4px] p-5 md:p-[18px] gap-[30px]">
      <Image
        src={thumbnail}
        width={392}
        height={230}
        alt={`Thumbnail for ${title}`}
        className="w-full h-[230px] object-cover"
      />
      <div className="flex flex-col gap-[11px]">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold text-xl md:text-[22px]">{title}</h3>
          <a
            href={link.url}
            className="flex px-[5px] py-[3px] gap-1 bg-[#deddde] rounded text-[14px]"
          >
            <span className="hidden md:block">{link.label}</span>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="link_arrow.svg"
              alt="link arrow"
              className="block dark:hidden"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="link_arrow_dark.svg"
              alt="link arrow"
              className="dark:block hidden"
            />
          </a>
        </div>
        <p
          className="line-clamp-2 text-sm md:text-base text-right"
          style={{ direction: "rtl" }}
        >
          {description}
        </p>
        <div className="flex items-center gap-3 bg-[#deddde] px-4 py-3 rounded-xl shadow-sm justify-around">
          {languageIcons.map((icon, id) => (
            <img
              key={id}
              src={icon}
              alt="programming language"
              width={36}
              height={36}
              className="transition-transform duration-300 hover:scale-110 hover:rotate-3"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;
