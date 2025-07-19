import React from "react";
import { Button } from "../../../../components/ui/button";

export const CallToActionSection = (): JSX.Element => {
  return (
    <section className="relative w-full py-[100px] px-6 md:px-[174px] overflow-hidden">
      {/* Background image positioned absolutely */}
      <div className="absolute top-0 right-0 h-full w-full md:w-1/2 z-0">
        <img
          src="https://c.animaapp.com/md9a2p9j5BLMrn/img/cta-section.png"
          alt="Person smiling"
          className="h-full w-full object-cover object-right"
        />
      </div>
      
      {/* Content with z-index to appear above the image */}
      <div className="flex flex-col max-w-[721px] gap-9 relative z-10">
        <div className="flex flex-col gap-4">
          <h2 className="font-['Sora',Helvetica] font-extrabold text-[#17233d] text-4xl md:text-8xl leading-tight md:leading-[115.2px] mt-[-1.00px]">
            Ready to Change Lives?
          </h2>
          <p className="font-['Epilogue',Helvetica] font-normal text-[#00000099] text-base leading-6">
            Join the growing community of compassionate supporters.
          </p>
        </div>

        <Button
          variant="outline"
          className="inline-flex items-center justify-center gap-2.5 px-[30px] py-[15px] rounded-[999px] border border-solid border-[#17233d] w-fit"
        >
          <span className="font-['Sora',Helvetica] font-semibold text-[#17233d] text-base">
            Become a Legend Today
          </span>
          <div className="relative w-6 h-6">
            <img
              className="absolute w-[11px] h-[11px] top-1.5 left-1.5"
              alt="Arrow icon"
              src="https://c.animaapp.com/md9a2p9j5BLMrn/img/vector-4.svg"
            />
          </div>
        </Button>
      </div>
    </section>
  );
};
