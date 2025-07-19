import React from "react";
import { AboutUsSection } from "./sections/AboutUsSection";
import { CallToActionSection } from "./sections/CallToActionSection";
import { FooterSection } from "./sections/FooterSection";
import { FrequentlyAskedQuestionsSection } from "./sections/FrequentlyAskedQuestionsSection";
import { HeroBannerSection } from "./sections/HeroBannerSection";
import { MembershipTiersSection } from "./sections/MembershipTiersSection";
import { OurPartnershipsSection } from "./sections/OurPartnershipsSection";
import { WhyMonthlyMattersSection } from "./sections/WhyMonthlyMattersSection";
import { WhyTrustUsSection } from "./sections/WhyTrustUsSection";

export const Homepage = (): JSX.Element => {
  return (
    <div
      className="bg-white flex flex-col items-center w-full"
      data-model-id="1:3"
    >
      <div className="bg-white w-full max-w-[1440px] overflow-hidden">
        <section className="w-full">
          <HeroBannerSection />
        </section>

        <section className="w-full">
          <MembershipTiersSection />
        </section>

        <section className="w-full">
          <WhyMonthlyMattersSection />
        </section>

        <section className="w-full">
          <WhyTrustUsSection />
        </section>

        <section className="w-full">
          <AboutUsSection />
        </section>

        <section className="w-full">
          <OurPartnershipsSection />
        </section>

        <section className="w-full">
          <FrequentlyAskedQuestionsSection />
        </section>

        <section className="w-full">
          <CallToActionSection />
        </section>

        <section className="w-full">
          <FooterSection />
        </section>
      </div>
    </div>
  );
};
