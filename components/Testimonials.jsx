'use client'; // only if using Next.js app router

import React from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { StarIcon } from '@heroicons/react/24/solid';

const testimonials = [
  {
    name: 'Ananya Mehta',
    role: 'Patient',
    photo: 'https://i.pravatar.cc/150?img=32',
    rating: 5,
    message:
      'After struggling with acne for years, I finally found relief here. The treatment plan was personalized and the results were amazing!',
  },
  {
    name: 'Rahul Verma',
    role: 'Patient',
    photo: 'https://i.pravatar.cc/150?img=33',
    rating: 5,
    message:
      'Professional, modern clinic with a caring staff. My hair restoration results have been beyond expectations. Highly recommend!',
  },
  {
    name: 'Priya Desai',
    role: 'Patient',
    photo: 'https://i.pravatar.cc/150?img=34',
    rating: 4,
    message:
      'The laser treatment I received was quick, painless, and super effective. The dermatologist was incredibly knowledgeable.',
  },
  {
    name: 'Kunal Singh',
    role: 'Patient',
    photo: 'https://i.pravatar.cc/150?img=35',
    rating: 5,
    message:
      'I was hesitant at first, but the team made me feel completely at ease. My skin has never looked better!',
  },
  {
    name: 'Riya Kapoor',
    role: 'Patient',
    photo: 'https://i.pravatar.cc/150?img=36',
    rating: 4,
    message:
      'Love the professionalism and how thorough the consultations are. I saw real improvement in just weeks.',
  },
  {
    name: 'Mohit Jain',
    role: 'Patient',
    photo: 'https://i.pravatar.cc/150?img=37',
    rating: 5,
    message:
      'Everything from booking to post-treatment follow-ups was smooth. Highly satisfied with the results.',
  },
];

const Testimonials = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 1,
      spacing: 16,
    },
    breakpoints: {
      '(min-width: 640px)': {
        slides: { perView: 2, spacing: 20 },
      },
      '(min-width: 1024px)': {
        slides: { perView: 3, spacing: 24 },
      },
    },
    created: (slider) => {
      setInterval(() => {
        slider.next();
      }, 4000); // autoplay every 4s
    },
  });

  return (
    <section className="py-20 bg-white px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-slate-800 mb-4 font-heading">
          What Our Patients Say
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto mb-12 font-body">
          Real stories. Real results. See how DermaCare Clinic has transformed lives through expert care and advanced treatments.
        </p>

        <div ref={sliderRef} className="keen-slider">
          {testimonials.map((t, index) => (
            <div key={index} className="keen-slider__slide">
              <div className="bg-blue-50 p-6 rounded-xl shadow hover:shadow-md transition duration-300 text-left mx-2 h-full flex flex-col justify-between">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={t.photo}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-white shadow"
                  />
                  <div>
                    <h4 className="text-lg font-semibold text-slate-800 font-heading">{t.name}</h4>
                    <p className="text-sm text-slate-500 font-body">{t.role}</p>
                  </div>
                </div>
                <p className="text-slate-700 text-sm mb-4 font-body">"{t.message}"</p>
                <div className="flex">
                  {Array(t.rating)
                    .fill()
                    .map((_, i) => (
                      <StarIcon key={i} className="h-5 w-5 text-yellow-400" />
                    ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
// This component uses Keen Slider for a responsive carousel of testimonials.