import React from 'react';

const About = () => {
  return (
    <section id="about" className="mt-24 px-6 sm:px-6 lg:px-8 max-w-3xl mx-auto text-center">
      <h2 className="text-4xl font-bold text-slate-800 mb-6 font-heading pt-4">
        Dr. Aisha Sharma
      </h2>
      <p className="text-slate-600 text-lg leading-relaxed font-body">
        With over a decade of experience in dermatology, Dr. Aisha Sharma has become a trusted name in skincare. Known for her compassionate approach and results-driven treatments, she’s helped thousands achieve healthier, more radiant skin. Her philosophy blends modern science with personalized care, making every patient feel seen, understood, and confident in their journey to better skin.
      </p>

      <div className="mt-8">
        <p className="text-sm text-slate-500 italic font-body">
          "Great skin begins with the right guidance — and a little bit of love."
        </p>
      </div>
    </section>
  );
};

export default About;
