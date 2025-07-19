import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const HeroBannerSection = (): JSX.Element => {
  // Navigation menu items
  const navItems = [
    { name: "Home", active: true },
    { name: "Brent's Story", active: false },
    { name: "Our Impact", active: false },
    { name: "How We Help", active: false },
    { name: "Contact Us", active: false },
  ];

  // Gallery images
  const galleryImages = [
    "https://c.animaapp.com/md9a2p9j5BLMrn/img/rectangle-2.png",
    "https://c.animaapp.com/md9a2p9j5BLMrn/img/rectangle-3.png",
    "https://c.animaapp.com/md9a2p9j5BLMrn/img/rectangle-4.png",
    "https://c.animaapp.com/md9a2p9j5BLMrn/img/rectangle-5.png",
  ];

  return (
    <section className="relative w-full">
      {/* Hero background image */}
      <div className="w-full h-[720px] relative">
        <img
          className="w-full h-full object-cover"
          alt="Hero background"
          src="https://c.animaapp.com/md9a2p9j5BLMrn/img/rectangle-1.png"
        />
      </div>

      {/* Navigation bar */}
      <nav className="flex items-center justify-between w-full px-[50px] pt-8 absolute top-0 border-b border-[#ffffffb2]">
        {/* Logo */}
        <img
          className="w-[174px]"
          alt="Logo"
          src="https://c.animaapp.com/md9a2p9j5BLMrn/img/frame-1.svg"
        />

        {/* Navigation items */}
        <div className="flex h-[117px] items-center justify-between px-[65px] border-r border-l border-[#ffffffb2]">
          {navItems.map((item, index) => (
            <div
              key={index}
              className={`flex items-center justify-center h-full px-4 ${
                item.active ? "border-b-[3px] border-white" : ""
              }`}
            >
              <div className="[font-family:'Sora',Helvetica] font-semibold text-base text-white">
                {item.name}
              </div>
            </div>
          ))}
        </div>

        {/* Join CTA button */}
        <Button
          variant="outline"
          className="rounded-full px-[20px] py-[10px] border-white text-white [font-family:'Sora',Helvetica] font-semibold bg-transparent hover:bg-white hover:text-[#17233d]"
        >
          Join the Legends Circle
        </Button>
      </nav>

      {/* Hero content */}
      <div className="flex flex-col w-[768px] items-start gap-8 absolute top-[239px] left-[174px]">
        <div className="flex flex-col items-start gap-4 w-full">
          <h1 className="w-[724px] [font-family:'Sora',Helvetica] font-semibold text-white text-[64px] leading-tight">
            Nobody Should Have to Fight Cancer Alone
          </h1>

          <div className="flex flex-col items-start gap-2 w-full">
            <p className="[font-family:'Epilogue',Helvetica] font-normal text-white text-base leading-6">
              <span>Blood cancer patients face an impossible choice: </span>
              <span className="font-semibold">
                pay for treatment or pay for life.
              </span>
            </p>

            <p className="[font-family:'Epilogue',Helvetica] text-2xl text-white leading-9">
              <span className="font-semibold">Join the </span>
              <span className="font-semibold italic">Legends Circle</span>
              <span className="font-semibold">
                {" "}
                and ensure they never have to choose.
              </span>
            </p>
          </div>
        </div>

        <Button
          variant="outline"
          className="rounded-full px-[30px] py-[15px] border-white text-white [font-family:'Sora',Helvetica] font-semibold bg-transparent hover:bg-white hover:text-[#17233d]"
        >
          Join the Legends Circle – $33/month
          <ArrowRightIcon className="ml-2 h-4 w-4" />
        </Button>
      </div>

      {/* Gallery row */}
      <div className="flex items-center justify-center mt-[-60px] relative z-10">
        {galleryImages.map((src, index) => (
          <Card key={index} className="border-0 rounded-none">
            <CardContent className="p-0">
              <img
                className="w-[273px] h-[221px] object-cover"
                alt={`Gallery image ${index + 1}`}
                src={src}
              />
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
