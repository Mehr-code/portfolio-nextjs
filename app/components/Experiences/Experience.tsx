import React from "react";
import Image from "next/image";

type Props = {
  id: number;
  role: string;
  compony: string;
  description: string;
  image: string;
  dates: string;
};
function Experience({ id, role, compony, description, image, dates }: Props) {
  return (
    <div className="card flex flex-col items-stretch w-full max-w-screen px-6 py-[27px] md:px-[33px] gap-3">
      <div className="flex flex-col md:items-start items-end md:flex-row gap-1 md:gap-0 md:justify-between">
        <div className="flex flex-col sm:flex-row gap-3 md:items-start items-end sm:items-center">
          <Image
            src={image}
            width={18}
            height={18}
            alt={`compony image for ${compony}`}
            className="w-10 h-10 lg:w-12 lg:-12"
          />
          <h3 className="text-xl font-medium">{compony}</h3>
        </div>
        <p className="text-base md:text-xl font-medium" dir="rtl">
          {role}
        </p>
      </div>
      <p
        className="text-sm md:text-base text-justify leading-relaxed tracking-normal"
        dir="rtl"
      >
        {description}
      </p>
      <p className="text-sm/1 md:text-base">{dates}</p>
    </div>
  );
}

export default Experience;
