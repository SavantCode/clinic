'use client';
import React from 'react';

const ReadyToTransform = () => {
  return (
    <section className="bg-gradient-to-br from-blue-100 via-white to-blue-50 px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-slate-800 leading-snug md:leading-tight mb-6 font-heading">
          Ready to Begin Your Transformation?
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base md:text-lg mb-10 font-body">
          Discover expert care, tailored treatments, and visible results. Whether it's clearer skin or fuller hair, we’re here to help you feel your best — inside and out.
        </p>
        <a
          href="#contact"
          className="inline-block text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300 px-6 sm:px-8 py-3 rounded-full text-sm sm:text-base md:text-lg font-semibold shadow-md"
        >
          Book Your Consultation
        </a>
      </div>
    </section>
  );
};

export default ReadyToTransform;
