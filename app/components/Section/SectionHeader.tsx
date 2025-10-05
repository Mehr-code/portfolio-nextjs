import React from "react";

type Props = {
  plainText: string;
  highlightText: string;
};

function SectionHeader({ plainText, highlightText }: Props) {
  return (
    <h2
      dir="rtl"
      className="text-[22px] md:text-[35px] px-20 text-center my-10"
    >
      <span className="highlight px-2 whitespace-nowrap">{highlightText}</span>
      {plainText}{" "}
    </h2>
  );
}

export default SectionHeader;
