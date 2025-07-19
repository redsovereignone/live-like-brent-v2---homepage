import { ArrowUpRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const AboutUsSection = (): JSX.Element => {
  // Image grid data
  const images = [
    {
      src: "https://c.animaapp.com/md9a2p9j5BLMrn/img/rectangle-6-1.png",
      alt: "Rectangle",
      className: "w-full h-[261px] object-cover",
    },
    {
      src: "https://c.animaapp.com/md9a2p9j5BLMrn/img/rectangle-7.png",
      alt: "Rectangle",
      className: "w-full h-[261px] object-cover",
    },
    {
      src: "https://c.animaapp.com/md9a2p9j5BLMrn/img/rectangle-8.png",
      alt: "Rectangle",
      className: "w-full h-[260px] object-cover",
    },
    {
      src: "https://c.animaapp.com/md9a2p9j5BLMrn/img/rectangle-9.png",
      alt: "Rectangle",
      className: "w-full h-[260px]",
    },
  ];

  return (
    <section className="flex w-full items-center justify-between">
      <div className="grid grid-cols-2 w-1/2">
        {images.map((image, index) => (
          <img
            key={`about-image-${index}`}
            className={image.className}
            alt={image.alt}
            src={image.src}
          />
        ))}
      </div>

      <Card className="w-1/2 h-[521px] bg-[#e4eaf3] rounded-none border-none">
        <CardContent className="flex flex-col items-start gap-4 px-[75px] py-[113px]">
          <div className="flex flex-col w-[471px] items-start gap-4">
            <h2 className="self-stretch mt-[-1.00px] font-['Sora',Helvetica] font-semibold text-[#17233d] text-5xl tracking-[0] leading-[72px]">
              Brent&apos;s Story
            </h2>

            <p className="self-stretch font-['Epilogue',Helvetica] font-normal text-base tracking-[0] leading-6">
              <span className="text-[#00000099]">
                At just 26, Brent faced blood cancer with a powerful vision:{" "}
              </span>
              <span className="font-bold text-[#17233d]">
                no one should face cancer—and its financial devastation—alone.
              </span>
            </p>

            <p className="self-stretch font-['Epilogue',Helvetica] font-normal text-[#00000099] text-base tracking-[0] leading-6">
              Live Like Brent was born from that fight, and every donation
              honors his mission to turn struggle into strength for others.
            </p>

            <Button variant="ghost" className="p-0 h-auto hover:bg-transparent">
              <span className="font-['Sora',Helvetica] font-semibold text-[#17233d] text-base tracking-[0] py-[15px]">
                Learn more about Brent&apos;s story
              </span>
              <ArrowUpRightIcon className="w-6 h-6 text-[#17233d]" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
