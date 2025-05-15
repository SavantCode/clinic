'use client';
import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

const reasons = [
  {
    title: "10+ Years of Experience",
    desc: "Led by a board-certified dermatologist with a proven track record in skincare and hair restoration.",
  },
  {
    title: "Advanced Technology",
    desc: "We use state-of-the-art FDA-approved equipment for safe, effective, and painless treatments.",
  },
  {
    title: "Tailored Treatment Plans",
    desc: "Every treatment is customized to your skin type, concerns, and goals — no one-size-fits-all.",
  },
  {
    title: "Trusted by 1000+ Patients",
    desc: "Our loyal client base is built on genuine results, transparency, and consistent care.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-blue-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 mb-4 leading-tight font-heading">
          Why Choose DermaCare Clinic?
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto mb-12 text-sm sm:text-base md:text-lg font-body">
          We don’t just treat skin — we transform confidence. Here’s why thousands trust us with their skin and hair care journey.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 text-left">
          {reasons.map((item, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="text-blue-600 shrink-0 pt-1">
                <CheckCircleIcon className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-slate-800 leading-snug font-heading">
                  {item.title}
                </h3>
                <p className="text-slate-600 mt-1 text-sm sm:text-base font-body">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
