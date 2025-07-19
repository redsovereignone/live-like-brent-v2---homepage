import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion";

export const FrequentlyAskedQuestionsSection = (): JSX.Element => {
  const faqItems = [
    {
      question: "Can I cancel anytime?",
      answer:
        "Yes! You're never locked in. Cancel or adjust your monthly support at any time.",
      defaultOpen: true,
    },
    {
      question: "Will I see where my money goes?",
      answer:
        "Yes, we provide detailed reports showing exactly how your contributions are being used and the impact they're making.",
      defaultOpen: false,
    },
    {
      question: "How often will I hear from you?",
      answer:
        "We send monthly updates about your impact, but you can adjust your communication preferences at any time.",
      defaultOpen: false,
    },
  ];

  return (
    <section className="flex flex-row w-full items-center justify-between">
      <div className="relative w-1/2">
        <img
          className="w-full h-[673px] object-cover"
          alt="People smiling"
          src="https://c.animaapp.com/md9a2p9j5BLMrn/img/rectangle-11.png"
        />
      </div>

      <div className="flex w-1/2 h-[673px] items-center px-[75px] py-[100px] bg-[#17233d]">
        <div className="flex flex-col w-full items-start gap-[23px]">
          <h2 className="font-['Sora',Helvetica] font-semibold text-white text-5xl leading-[72px]">
            Frequently Asked Questions
          </h2>

          <Accordion
            type="single"
            collapsible
            className="w-full"
            defaultValue="item-0"
          >
            {faqItems.map((item, index) => (
              <AccordionItem
                key={`faq-${index}`}
                value={`item-${index}`}
                className="border-b border-[#ffffff33] py-[25px] px-0"
              >
                <AccordionTrigger className="font-['Sora',Helvetica] font-semibold text-white text-2xl leading-[31.2px]">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="font-body-text font-[number:var(--body-text-font-weight)] text-white text-[length:var(--body-text-font-size)] tracking-[var(--body-text-letter-spacing)] leading-[var(--body-text-line-height)] [font-style:var(--body-text-font-style)]">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
