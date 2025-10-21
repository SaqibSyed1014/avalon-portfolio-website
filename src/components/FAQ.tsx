import React, { useState } from "react";

import SectionHead from "@/components/ui/SectionHead";
import SectionLayout from "@/components/ui/SectionLayout";

interface FAQ {
  question: string;
  answer: string;
}

const faqs :FAQ[] = [
  {
    question: 'How long does it take to build a website?',
    answer: 'The timeline varies depending on the complexity of the project. On average, it takes 4-6 weeks from start to finish.',
  },
  {
    question: 'How long does it take to build a website?',
    answer: 'The timeline varies depending on the complexity of the project. On average, it takes 4-6 weeks from start to finish.',
  },
  {
    question: 'How long does it take to build a website?',
    answer: 'The timeline varies depending on the complexity of the project. On average, it takes 4-6 weeks from start to finish.',
  },
  {
    question: 'How long does it take to build a website?',
    answer: 'The timeline varies depending on the complexity of the project. On average, it takes 4-6 weeks from start to finish.',
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
            descWidth="400px"
            isCentered={true}
          />

          <div className="">
            {faqs.map((faq, index) => {
              const isOpen = openIndexes.includes(index);
              return (
                <div
                  key={index}
                  className="py-2 border-b border-gray-300 overflow-hidden transition-all duration-300 cursor-pointer"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="flex justify-between items-center w-full"
                  >
                    <span className="text-xl">{faq.question}</span>

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
                  </button>

                  {/* FAQ Answer */}
                  <div
                    className={`h-full transition-all duration-500 overflow-hidden ${
                      isOpen ? " max-h-[40px]" : "max-h-0"
                    }`}
                  >
                    <p className="pt-4">{faq.answer}</p>
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
