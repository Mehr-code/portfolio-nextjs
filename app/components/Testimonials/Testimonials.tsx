import React from "react";
import SectionContainer from "../Section/SectionContainer";
import SectionHeader from "../Section/SectionHeader";
import testimonials from "@/data/testimonials.json";
import Testimonial from "./Testimonial";

function Testimonials() {
  return (
    <SectionContainer id="testimonials">
      <div className="section-contents">
        <SectionHeader plainText="و نظر همکاران من 💁‍♂️" highlightText="رضایت" />
        <div className="w-full overflow-x-clip">
          <div className="flex items-stretch justify-start gap-[23px] pr-[23px] min-w-max animate-scroll">
            {[...testimonials, ...testimonials].map((testimonial, id) => (
              <Testimonial
                key={`${id}-${testimonial.name}`}
                image={testimonial.image}
                name={testimonial.name}
                role={testimonial.role}
                description={testimonial.description}
              />
            ))}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}

export default Testimonials;
