import React from "react";

function Contact() {
  return (
    <section
      id="contact"
      className="card relative items-center mx-6 flex flex-col px-[33px] py-[27px] z-30 gap-[54px] md:gap-[35px] mb-[67px] md:mb-[42px]"
    >
      <div className="flex flex-col md:flex-row-reverse gap-5 md:justify-between md:w-full">
        <h2
          className="font-semibold text-[22px] md:text-[32px] md:max-w-[462px]"
          dir="rtl"
        >
          راستش بدمم نمیاد اگه خواستی توی مسیر یادگیری ام بهم کمک کنی و همراهیم
          کنی!!
        </h2>
        <div className="flex flex-col gap-5 items-center md:items-end">
          <a
            href="mailto:papa.molla8@gmail.com"
            className="self-center md:self-start bg-[var(--primary)] text-white p-2.5 rounded flex gap-2.5 items-center text-lg md:text-xl/l font-normal"
          >
            <img src="/mail_icon.svg" />ی ایمیل بهم بدی،عالی میشه
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
