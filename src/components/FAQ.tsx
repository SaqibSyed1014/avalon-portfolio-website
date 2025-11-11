"use client";

import React, { useState } from "react";

import SectionHead from "@/components/ui/SectionHead";
import SectionLayout from "@/components/ui/SectionLayout";

interface FAQ {
  question: string;
  answer: string;
}

const faqs :FAQ[] = [
  {
    question: 'How soon can we start?',
    answer: ' I can usually begin within 1-2 days; discovery calls are available this week.',
  },
  {
    question: 'Do you work with developers?',
    answer: ' Yes — I hand off production-ready files and collaborate on build.',
  },
  {
    question: 'Can you audit our current site?',
    answer: 'Yes — I’ll deliver a prioritized UX audit with quick wins and a roadmap.',
  },
  {
    question: 'What tools do you use?',
    answer: 'Figma, Framer, and modern design-system workflows',
  }
]

const FaqSection = () => {

  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggleFAQ = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };
  return (
    <section className="py-[100px]">
      <div>
        <SectionLayout>
          <SectionHead
            subText="(5) FAQ"
            heading="Frequeantly asked questions"
            description="Here are some of the most common questions I get about my web design services:"
            descWidth="max-w-full lg:max-w-[400px]"
            isCentered={true}
          />

          <div className="max-w-[1000px] w-full mx-auto">
            {faqs.map((faq, index) => {
              const isOpen = openIndexes.includes(index);
              return (
                <div
                  key={index}
                  className="py-2 border-b border-white last:border-0 overflow-hidden transition-all duration-300 cursor-pointer"
                >
                  <div
                    onClick={() => toggleFAQ(index)}
                    className="flex justify-between items-center w-full"
                  >
                    <p className="text-md lg:text-xl">{faq.question}</p>

                    {/* Plus / Minus Icon */}
                    <div className="w-10 h-10 flex justify-center items-center">
                      <div className="relative w-4 h-4">
                          <div
                            className={`absolute top-1/2 left-0 w-full h-[2px] bg-white transition-all duration-300 ${
                              isOpen ? "rotate-45 opacity-0" : "rotate-0 opacity-100"
                            }`}
                          ></div>
                          <div
                            className={`absolute top-1/2 left-0 w-full h-[2px] bg-white transition-transform duration-300 ${
                              isOpen ? "" : "-rotate-90"
                            }`}
                          ></div>
                      </div>
                    </div>
                  </div>

                  {/* FAQ Answer */}
                  <div
                    className={`h-full transition-all duration-500 overflow-hidden ${
                      isOpen ? " max-h-[40px]" : "max-h-0"
                    }`}
                  >
                    <p className="pt-4 opacity-80">{faq.answer}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </SectionLayout>
      </div>
    </section>
  );
};

export default FaqSection;
