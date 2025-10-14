import React from "react";
type Props = {
  icon: string;
  name: string;
};

const Skill = ({ icon, name }: Props) => {
  return (
    <div className="relative flex items-center gap-1 lg:gap-3 md:gap-2 lg:px-4 px-1 py-3 border-2 border-[var(--primary)] rounded-xl bg-[#deddde] hover:scale-105 transform transition duration-300 shadow-lg justify-start">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={icon}
        alt={`icon of ${name}`}
        className="lg:w-10 lg:h-10 md:w-7 md:h-7 w-5 h-5 object-contain"
      />
      <p className="text-black font-mono text-[13px] md:text-sm lg:text-lg truncate">
        {name}
      </p>
    </div>
  );
};

export default Skill;
