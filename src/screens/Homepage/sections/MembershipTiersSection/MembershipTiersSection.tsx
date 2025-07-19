import React, { useEffect } from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const MembershipTiersSection = (): JSX.Element => {
  // Membership tiers data
  const membershipTiers = [
    {
      price: "$25/month",
      title: "Legends Circle Supporter",
      description: "Helps cover medication co-pays.",
      highlighted: false,
    },
    {
      price: "$33/month",
      title: "Legends Circle Member",
      description:
        "Provides emergency financial assistance when patients need it most.",
      highlighted: true,
    },
    {
      price: "$50/month",
      title: "Legends Circle Champion",
      description: "Covers transportation costs for treatment access.",
      highlighted: false,
    },
    {
      price: "$100/month",
      title: "Legends Circle Leader",
      description: "Delivers comprehensive crisis support.",
      highlighted: false,
    },
  ];

  // Add useEffect to handle script loading
  useEffect(() => {
    // This ensures the script is properly loaded after component mount
    const script = document.querySelector('#givebutter-widget-container script');
    if (script) {
      const newScript = document.createElement('script');
      newScript.async = true;
      newScript.src = script.getAttribute('src') || '';
      script.parentNode?.replaceChild(newScript, script);
    }
  }, []);

  return (
    <div className="flex flex-col w-full items-start gap-8">
      <div className="flex flex-col items-start gap-4 w-full">
        <h2 className="w-full [font-family:'Sora',Helvetica] font-semibold text-[#17233d] text-5xl text-center tracking-[0] leading-[normal]">
          Membership Tiers
        </h2>

        <p className="w-full [font-family:'Epilogue',Helvetica] font-normal text-black text-base text-center tracking-[0] leading-6">
          Support patients monthly by joining a tier that fits your impact
          goals:
        </p>
      </div>

      <div className="flex flex-col md:flex-row w-full items-start justify-between gap-8">
        <div className="flex flex-col w-full md:w-1/2 items-start gap-8">
          {membershipTiers.map((tier, index) => (
            <Card
              key={index}
              className={`w-full ${tier.highlighted ? "border-black" : "border-[#c1c1c1]"}`}
            >
              <CardContent className="flex flex-col items-start gap-4 p-[25px]">
                <h3
                  className={`w-full mt-[-1.00px] [font-family:'Epilogue',Helvetica] ${tier.highlighted ? "font-black" : "font-semibold"} text-[#17233d] text-2xl tracking-[0] leading-9`}
                >
                  {tier.price} – {tier.title}
                </h3>
                <p className="w-full [font-family:'Epilogue',Helvetica] font-normal text-[#00000099] text-base tracking-[0] leading-6">
                  {tier.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="w-full md:w-1/2 border-[#c1c1c1]">
          <CardContent className="p-[50px] h-full flex items-center justify-center">
            <div className="w-full">
              <givebutter-widget id="gM3knj"></givebutter-widget>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
