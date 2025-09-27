import React from "react";

function Hero() {
  return (
    <section className="relative flex flex-row items-center z-20 mx-auto">
      <div className="flex flex-col gap-[13px] items-center">
        <h1 className="text-2xl text-center font-semibold block">
          <span className="mr-3">😃</span>
          چطوری؟ من مهرانم
          <span className="block text-[27px] highlight mt-2">
            ی مهندس نرم افزار
          </span>
        </h1>
        <p className="text-center text-sm mx-6">
          دوس دارم چیز میز بسازم برای خودم و لذت می برم از سر در آوردن کارکرد
          های کامپیوتر های مختلف، مخصوصا لپ تاپ توی اتاقم
        </p>
        <a
          href="mailto:papa.molla8@gmail.com"
          className="self-center bg-[var(--primary)] text-white p-2.5 rounded flex gap-2.5 items-center text-sm"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/arrow_right_icon.svg"
            alt="Arrow"
            className="transform scale-x-[-1]"
          />
          ارتباط ایمیلی
        </a>
      </div>
    </section>
  );
}

export default Hero;
