import React from "react";
import Image from "next/image";

function Hero() {
  return (
    <section className="relative flex flex-row-reverse items-center mx-auto z-20 md:gap-[50px] lg:gap-[200px] md:mx-10 justify-center">
      {/* متن و دکمه */}
      <div className="flex flex-col items-center gap-[13px] md:items-end md:gap-[34px] md:my-[58px]">
        <h1 className="text-3xl font-semibold leading-snug text-center md:text-[44px] md:text-right">
          <span className="block">
            چطوری؟ من <span className="">مهرانم</span>
            <span className="mx-2">😄</span>
          </span>
          <span className="block mt-2 text-[30px] md:text-[53px] highlight">
            مهندس نرم‌افزارم
          </span>
        </h1>

        <p
          className="mx-6 text-sm text-center md:w-[410px] md:text-[22px] md:text-end"
          dir="rtl"
        >
          دوس دارم چیز میز بسازم برای خودم و لذت می‌برم از سر درآوردن کارکرد
          کامپیوترهای مختلف، مخصوصاً لپ‌تاپ توی اتاقم 💻
        </p>

        <a
          href="mailto:papa.molla8@gmail.com"
          className="flex items-center gap-2.5 self-center rounded bg-[var(--primary)] p-2.5 text-sm text-white md:self-end md:text-xl/6 transition-all duration-300 hover:brightness-110"
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

      {/* عکس‌ها */}
      <div className="relative hidden md:block">
        <Image
          src="/profile_light_blue.png"
          width={372}
          height={425}
          alt="light purple rectangle"
          className="absolute left-0 -z-10 w-[372px] h-[425px]"
        />
        <Image
          src="/profile_dark_blue.png"
          width={450}
          height={430}
          alt="dark purple rectangle"
          className="absolute left-0 -z-10"
        />
        <Image
          src="/profile_picture.jpg"
          width={357}
          height={400}
          alt="Profile picture"
          className="z-10 ml-[7.7px] my-[6.5px] min-w-[340px] h-[400px] rounded-3xl"
        />
      </div>
    </section>
  );
}

export default Hero;
