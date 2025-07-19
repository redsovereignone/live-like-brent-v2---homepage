import { ArrowUpRightIcon } from "lucide-react";
import React from "react";

export const OurPartnershipsSection = (): JSX.Element => {
  return (
    <section className="flex flex-col md:flex-row w-full py-16 px-6 md:px-[174px] gap-16">
      <div className="flex flex-col w-full md:w-1/3 items-start gap-4">
        <h2 className="font-['Sora',Helvetica] font-semibold text-[#17233d] text-5xl tracking-[0] leading-[72px]">
          Our Hospital Partnerships
        </h2>

        <p className="font-['Epilogue',Helvetica] font-normal text-[#00000099] text-base tracking-[0] leading-6 mb-6">
          We work directly with hospital social workers to identify and support blood cancer patients in real financial need. This ensures timely help, real impact, and zero bureaucracy.
        </p>

        <button className="flex items-center gap-2.5 py-[15px] group">
          <span className="font-['Sora',Helvetica] font-semibold text-[#17233d] text-base tracking-[0]">
            Learn more about our impact
          </span>
          <ArrowUpRightIcon className="w-6 h-6 text-[#17233d]" />
        </button>
      </div>

      <div className="w-full md:w-2/3">
        <img 
          src="https://c.animaapp.com/md9a2p9j5BLMrn/img/2-1.png"
          alt="Hospital Partners"
          className="w-full h-auto object-contain"
        />
      </div>
    </section>
  );
};
