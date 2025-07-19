import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const WhyTrustUsSection = (): JSX.Element => {
  // Feature card data for mapping
  const featureCards = [
    {
      id: 1,
      icon: (
        <div className="relative w-16 h-16">
          <div className="relative w-[57px] h-16 left-1">
            <img
              className="absolute w-[57px] h-[49px] top-[15px] left-0"
              alt="Vector"
              src="https://c.animaapp.com/md9a2p9j5BLMrn/img/vector-17.svg"
            />
            <img
              className="absolute w-[15px] h-[15px] top-0 left-1"
              alt="Vector"
              src="https://c.animaapp.com/md9a2p9j5BLMrn/img/vector-14.svg"
            />
            <img
              className="absolute w-[15px] h-[15px] top-0 left-[38px]"
              alt="Vector"
              src="https://c.animaapp.com/md9a2p9j5BLMrn/img/vector-16.svg"
            />
          </div>
        </div>
      ),
      title: (
        <>
          Direct
          <br />
          Impact
        </>
      ),
      description: "Your donations go straight to families in need",
    },
    {
      id: 2,
      icon: (
        <div className="relative w-16 h-16 overflow-hidden">
          <div className="relative h-[59px] top-[3px] bg-[url(https://c.animaapp.com/md9a2p9j5BLMrn/img/vector-10.svg)] bg-[100%_100%]" />
        </div>
      ),
      title: "Strategic Partnerships",
      description: "We collaborate with leading cancer centers",
    },
    {
      id: 3,
      icon: (
        <div className="relative w-16 h-16">
          <div className="relative h-[60px] top-0.5">
            <div className="relative w-16 h-[60px]">
              <img
                className="absolute w-[26px] h-[26px] top-[26px] left-[19px]"
                alt="Vector"
                src="https://c.animaapp.com/md9a2p9j5BLMrn/img/vector-12.svg"
              />
              <img
                className="absolute w-16 h-[60px] top-0 left-0"
                alt="Vector"
                src="https://c.animaapp.com/md9a2p9j5BLMrn/img/vector-22.svg"
              />
            </div>
          </div>
        </div>
      ),
      title: "Immediate Response",
      description: "Emergency aid gets to patients fast",
    },
    {
      id: 4,
      icon: (
        <div className="relative w-16 h-16">
          <div className="h-16">
            <div className="relative w-16 h-16">
              <img
                className="absolute w-1 h-1 top-2 left-[30px]"
                alt="Vector"
                src="https://c.animaapp.com/md9a2p9j5BLMrn/img/vector-5.svg"
              />
              <img
                className="absolute w-1 h-[11px] top-[15px] left-[30px]"
                alt="Vector"
                src="https://c.animaapp.com/md9a2p9j5BLMrn/img/vector-5.svg"
              />
              <img
                className="absolute w-16 h-16 top-0 left-0"
                alt="Vector"
                src="https://c.animaapp.com/md9a2p9j5BLMrn/img/vector-21.svg"
              />
            </div>
          </div>
        </div>
      ),
      title: "Total Transparency",
      description: "You'll always know where your support goes",
    },
  ];

  return (
    <section className="flex flex-col md:flex-row items-start justify-between gap-8 md:gap-16 py-16 px-4 md:px-8 lg:px-16 w-full">
      <div className="flex flex-col w-full md:w-1/3 items-start gap-4">
        <h2 className="font-['Sora',Helvetica] font-semibold text-[#17233d] text-4xl md:text-5xl leading-tight">
          Why You Can
          <br />
          Trust Us
        </h2>
        <p className="font-['Epilogue',Helvetica] font-normal text-[#00000099] text-base leading-6">
          We&apos;re built on compassion, speed, and transparency
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full md:w-2/3">
        {featureCards.map((feature) => (
          <Card key={feature.id} className="border-none shadow-none">
            <CardContent className="flex flex-col items-start gap-4 p-6">
              {feature.icon}
              <h3 className="font-['Epilogue',Helvetica] font-semibold text-[#17233d] text-2xl leading-9">
                {feature.title}
              </h3>
              <p className="font-['Epilogue',Helvetica] font-normal text-[#00000099] text-base leading-6">
                {feature.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
