import React from "react";

function Footer() {
  return (
    <section className="flex justify-center items-center w-full px-4 sm:px-8 lg:px-20 py-16 bg-brown-600">
      {/* wrapper */}
      <div className="flex w-full max-w-[1220px] flex-col md:flex-row justify-between items-start gap-10">
        {/* Logo + copyright */}
        <div className="flex flex-col items-start gap-[18px] shrink-0">
          <div className="flex items-center gap-2 py-[1px]">
            <img
              src="./assets/Cir.svg"
              alt="Logo"
              className="w-[39px] h-[37px]"
            />
            <h1 className="text-black font-DM Sans text-[28px] font-extrabold leading-normal tracking-[0.64px]">
              Funitech
            </h1>
          </div>
          <h2 className="text-[16px] font-DM Sans font-normal leading-[30px] max-w-[280px]">
            Copyright © 2024 Furnitech | All Rights Reserved
          </h2>
        </div>

        {/* Footer links */}
        <div className="flex flex-wrap items-start gap-8 md:gap-[60px]">
          {/* Product */}
          <div className="flex flex-col items-start gap-6">
            <h1 className="text-black font-DM Sans text-[20px] font-semibold leading-[20px]">
              Product
            </h1>
            <div className="flex flex-col items-start gap-[18px]">
              <a href="/" className="text-neutral-text-gray font-DM Sans text-[18px] font-normal leading-[18px] hover:text-brown">
                Categories
              </a>
              <a href="/" className="text-neutral-text-gray font-DM Sans text-[18px] font-normal leading-[18px] hover:text-brown">
                Reviews
              </a>
              <a href="/" className="text-neutral-text-gray font-DM Sans text-[18px] font-normal leading-[18px] hover:text-brown">
                New Colections
              </a>
            </div>
          </div>

          {/* Company */}
          <div className="flex flex-col items-start gap-6">
            <h1 className="text-black font-DM Sans text-[20px] font-semibold leading-[20px]">
              Company
            </h1>
            <div className="flex flex-col items-start gap-[18px]">
              <a href="/" className="text-neutral-text-gray font-DM Sans text-[18px] font-normal leading-[18px] hover:text-brown">
                About
              </a>
              <a href="/" className="text-neutral-text-gray font-DM Sans text-[18px] font-normal leading-[18px] hover:text-brown">
                Contact Us
              </a>
            </div>
          </div>

          {/* Support */}
          <div className="flex flex-col items-start gap-6">
            <h1 className="text-black font-DM Sans text-[20px] font-semibold leading-[20px]">
              Support
            </h1>
            <div className="flex flex-col items-start gap-[18px]">
              <a href="/" className="text-neutral-text-gray font-DM Sans text-[18px] font-normal leading-[18px] hover:text-brown">
                Help center
              </a>
              <a href="/" className="text-neutral-text-gray font-DM Sans text-[18px] font-normal leading-[18px] hover:text-brown">
                Chat support
              </a>
            </div>
          </div>

          {/* Follow us */}
          <div className="flex flex-col items-start gap-6">
            <h1 className="text-black font-DM Sans text-[20px] font-bold leading-[20px]">
              Follow us
            </h1>
            <div className="flex flex-col items-start gap-[18px]">
              <a href="/" className="flex items-center gap-2 hover:text-brown">
                <img src="./assets/Facebook.svg" alt="Facebook" className="w-6 h-6 shrink-0" />
                <span className="text-neutral-text-gray font-DM Sans text-[18px] font-normal leading-[18px]">Facebook</span>
              </a>
              <a href="/" className="flex items-center gap-2 hover:text-brown">
                <img src="./assets/Twitter.svg" alt="Twitter" className="w-6 h-6 shrink-0" />
                <span className="text-neutral-text-gray font-DM Sans text-[18px] font-normal leading-[18px]">Twitter</span>
              </a>
              <a href="/" className="flex items-center gap-2 hover:text-brown">
                <img src="./assets/Instagram.svg" alt="Instagram" className="w-6 h-6 shrink-0" />
                <span className="text-neutral-text-gray font-DM Sans text-[18px] font-normal leading-[18px]">Instagram</span>
              </a>
              <a href="/" className="flex items-center gap-2 hover:text-brown">
                <img src="./assets/LinkedIn.svg" alt="LinkedIn" className="w-6 h-6 shrink-0" />
                <span className="text-neutral-text-gray font-DM Sans text-[18px] font-normal leading-[18px]">LinkedIn</span>
              </a>
              <a href="/" className="flex items-center gap-2 hover:text-brown">
                <img src="./assets/Youtube.svg" alt="Youtube" className="w-6 h-6 shrink-0" />
                <span className="text-neutral-text-gray font-DM Sans text-[18px] font-normal leading-[18px]">Youtube</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
