"use client";

import React, { useEffect } from "react";
import gsap from "gsap";

import { Button } from "@/components/ui";
import SectionHead from "@/components/ui/SectionHead";
import SectionLayout from "@/components/ui/SectionLayout";

const Pricing = () => {
  useEffect(() => {
    gsap.fromTo('.pricing-wrapper', {
      y: 50,
    }, {
      y: 0,
      scrollTrigger: {
        trigger: '.pricing-wrapper',
        start: "top bottom",
        end: "top center",
        scrub: 1
      },
    })
  }, []);

  const pricingCardClass = 'relative h-full group/item hover:scale-[1.02] hover:translate-y-[-10px] transition-all card-style duration-700'


  const planDetails = [
    {
      name: 'Free Consultation Call',
      price: '$0/30min',
      description: 'Let’s discuss your goals, pain points, and growth opportunities.',
      benefits: [
        'Personalized project insights',
        'Timeline & budget guidance',
        'Strategic UX/UI recommendations',
        'No commitment required'
      ],
      buttonLabel: 'Get a free Consultation call'
    },
    {
      name: 'Monthly UX/UI Designer Retainer',
      price: '$6000/month',
      description: 'Ongoing design support for teams that need consistent quality and speed.',
      benefits: [
        'Dedicated designer (40 hrs/week)',
        'Slack & Notion collaboration',
        'Design systems & iterations included',
        'Priority turnaround times'
      ],
      buttonLabel: 'Start Retainer Plan'
    }
  ]

  return (
    <section className="section-v-space lg:!pt-[200px]">
      <div>
        <SectionLayout className="!gap-10">
          <SectionHead
            subText="(4) Pricing"
            heading="How much does it cost?"
            description="Investing in a professional, custom-designed website is a crucial step for any startup looking to establish a strong online presence. "
            isCentered={true}
            descWidth="max-w-[470px] lg:max-w-[580px]"
          />

          <div className="pricing-wrapper grid grid-cols-1 xl:grid-cols-2 justify-center gap-5 w-full max-w-[1020px] mx-auto">
            {planDetails.map((plan, index) => (
              <div key={index}>
                <div className={pricingCardClass}>
                  <div className="flex flex-col justify-between relative z-10 h-full">
                    <div className="space-y-[26px] mb-[26px]">
                      <div className="space-y-3">
                        <h4 className="text-2xl">{plan.name}</h4>
                        <h3 className="text-[30px] xl:text-[46px] leading-[110%]">{plan.price}</h3>
                        <p>{plan.description}</p>
                      </div>

                      <ul className="space-y-3">
                        {plan.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-center gap-2.5">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24"
                                 fill="white">
                              <path
                                d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z"
                                fill="#fff" />
                            </svg>
                            <p>{benefit}</p>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="relative bottom-0">
                      <Button fullWidth={true}>
                      {plan.buttonLabel}
                    </Button>
                    </div>
                  </div>

                  <div
                    className="absolute inset-0 secondary-gradient opacity-0 group-hover/item:opacity-40 transition"></div>
                </div>
              </div>
            ))}
          </div>
        </SectionLayout>
      </div>
    </section>
  );
};

export default Pricing;
