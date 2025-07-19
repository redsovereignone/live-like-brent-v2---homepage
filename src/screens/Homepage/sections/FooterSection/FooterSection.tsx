import React from "react";

export const FooterSection = (): JSX.Element => {
  // Quick links data
  const quickLinks = [
    "Home",
    "Brent's Story",
    "Join the Legends Circle",
    "Our Impact",
    "How We Help",
    "Contact Us",
  ];

  return (
    <footer className="flex flex-col w-full items-center gap-6 bg-transparent">
      <div className="relative w-full h-[390px] bg-black">
        {/* Logo and tagline */}
        <div className="flex flex-col w-[294px] items-start gap-[33px] absolute top-[50px] left-[174px]">
          <img
            className="relative w-[174px] h-[86.26px]"
            alt="Live Like Brent Logo"
            src="https://c.animaapp.com/md9a2p9j5BLMrn/img/-000000ff.png"
          />

          <p className="font-['Epilogue',Helvetica] font-normal text-white text-sm tracking-[0] leading-[21px]">
            Take that trip, go snowboarding, get your friends together, whatever{" "}
            <span className="italic">it</span> is, do it. That&apos;s Living
            Like Brent.
          </p>
        </div>

        {/* Quick Links */}
        <div className="absolute w-[189px] h-[290px] top-[50px] left-[720px]">
          <h3 className="font-['Sora',Helvetica] font-semibold text-white text-2xl tracking-[0] leading-[normal]">
            Quick Links
          </h3>

          <div className="flex flex-col items-start gap-[18px] mt-14">
            {quickLinks.map((link, index) => (
              <a
                key={index}
                href="#"
                className="font-['Epilogue',Helvetica] font-medium text-white text-base tracking-[0] leading-6 hover:underline"
              >
                {link}
              </a>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <div className="absolute w-[233px] h-[189px] top-[50px] left-[1035px]">
          <h3 className="font-['Sora',Helvetica] font-semibold text-2xl leading-[normal] text-white tracking-[0]">
            Contact
          </h3>

          <div className="flex flex-col items-start gap-[18px] mt-[69px]">
            <div className="flex items-start gap-5">
              <div className="relative w-5 h-5">
                <div className="relative w-3 h-[17px] top-0.5 left-1">
                  <div className="relative w-3.5 h-[18px] -top-px -left-px">
                    <img
                      className="absolute w-1.5 h-1.5 top-1 left-1"
                      alt="Vector"
                      src="https://c.animaapp.com/md9a2p9j5BLMrn/img/vector-6.svg"
                    />
                    <img
                      className="absolute w-3.5 h-[18px] top-0 left-0"
                      alt="Vector"
                      src="https://c.animaapp.com/md9a2p9j5BLMrn/img/vector-8.svg"
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col w-[191px] items-start gap-1.5">
                <p className="font-['Epilogue',Helvetica] font-medium text-white text-base tracking-[0] leading-6">
                  6024 Ridge Ave. Box 116-235
                </p>
                <p className="font-['Epilogue',Helvetica] font-medium text-white text-base tracking-[0] leading-6">
                  Philadelphia, PA 19128
                </p>
              </div>
            </div>

            <div className="flex items-start gap-5 w-full">
              <div className="relative w-5 h-5">
                <img
                  className="absolute w-[17px] h-[13px] top-[3px] left-0.5"
                  alt="Email icon"
                  src="https://c.animaapp.com/md9a2p9j5BLMrn/img/vector-3.svg"
                />
              </div>
              <a
                href="mailto:Info@livelikebrent.com"
                className="font-['Epilogue',Helvetica] font-medium text-white text-base tracking-[0] leading-6 hover:underline"
              >
                Info@livelikebrent.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright and legal links */}
      <div className="w-full text-center py-2">
        <p className="font-['Epilogue',Helvetica] font-normal text-xs tracking-[0] leading-[18px]">
          <span className="text-black">
            Copyright 2025 © Live Like Brent | 501c.3 EIN - 47-4969983 | All
            Rights Reserved.{" "}
          </span>
          <a href="#" className="text-[#17233d] underline">
            Terms of Service
          </a>
          <span className="text-black"> |</span>
          <span className="text-[#17233d]">&nbsp;</span>
          <a href="#" className="text-[#17233d] underline">
            Privacy Policy
          </a>
        </p>
      </div>
    </footer>
  );
};
