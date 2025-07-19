import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const WhyMonthlyMattersSection = (): JSX.Element => {
  return (
    <section className="w-full relative">
      <div className="flex flex-row">
        <div className="w-1/2 relative">
          <img
            className="w-full h-auto object-cover"
            alt="Child at table"
            src="https://c.animaapp.com/md9a2p9j5BLMrn/img/rectangle-6.png"
          />
        </div>

        <Card className="w-1/2 rounded-none border-0">
          <CardContent className="flex flex-col p-24 bg-[#e4eaf3] h-full justify-center">
            <div className="flex flex-col gap-4 max-w-[471px]">
              <h2 className="font-['Sora',Helvetica] font-semibold text-[#17233d] text-5xl leading-[72px]">
                Why Monthly Matters
              </h2>

              <p className="font-['Epilogue',Helvetica] font-normal text-[#00000099] text-base leading-6">
                Your recurring gift changes everything.
              </p>

              <blockquote className="pl-[30px] border-l-[3px] border-[#17233d] border-solid">
                <p className="font-['Epilogue',Helvetica] font-semibold text-[#17233d] text-xl leading-[30px]">
                  "When you give monthly, patients can focus on healing instead
                  of worrying about bills."
                </p>
              </blockquote>

              <p className="font-['Epilogue',Helvetica] font-normal text-[#00000099] text-base leading-6">
                Predictable support means predictable relief. Families in crisis
                deserve stability—and you can help provide it.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
