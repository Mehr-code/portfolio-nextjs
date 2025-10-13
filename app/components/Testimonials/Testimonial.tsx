import React from "react";
import Image from "next/image";

type Props = {
  image: string;
  name: string;
  role: string;
  description: string;
};

function Testimonial({ image, name, role, description }: Props) {
  return (
    <div className="card flex flex-col gap-[33px] w-[270px] sm:min-w-[436px] px-[33px] py-[27px]">
      <div className="flex gap-2 items-center justify-between">
        <Image
          src={image}
          alt={`image of ${name}`}
          width={38}
          height={28}
          className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover shadow-sm"
        />

        <div className="flex flex-col">
          <p className="text-sm" style={{ direction: "rtl" }}>
            {name}
          </p>
          <p className="text-sm text-[#777]">{role}</p>
        </div>
      </div>
      <p
        className="text-xs sm:text-sm text-justify leading-relaxed tracking-normal"
        dir="rtl"
      >
        {description}
      </p>
    </div>
  );
}

export default Testimonial;
