"use client";
import React, { useRef } from "react";

const services = [
  {
    title: "Acne & Scarring",
    desc: "Say goodbye to stubborn acne and scarring with our personalized skin treatments.",
    image: "/images/lasterTreatment.png",
  },
  {
    title: "Hair Restoration",
    desc: "Restore your confidence with our advanced hair regrowth therapies and treatments.",
    image: "/images/hairTreatment.png",
  },
  {
    title: "Anti-Aging Treatments",
    desc: "Achieve youthful, glowing skin with our expert anti-aging solutions including Botox and fillers.",
    image: "/images/anti_agingTreatment.png",
  },
  {
    title: "Skin Brightening",
    desc: "Even out your skin tone and achieve radiant skin with our brightening solutions.",
    image: "/images/skingbrightening.png",
  },
  {
    title: "Acne & Scarring",
    desc: "Say goodbye to stubborn acne and scarring with our personalized skin treatments.",
    image: "/images/acne_Scar_Treatment.png",
  },
  {
    title: "Consultations",
    desc: "Expert one-on-one skin consultations tailored to your needs and lifestyle.",
    image: "/images/consultation.png",
  },
];

const Services = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.firstChild?.offsetWidth || 300;
      const scrollAmount = direction === "left" ? -cardWidth : cardWidth;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="mt-24 sm:mt-32 px-6 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-6 sm:mb-10 gap-4">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-2 pt-2.5">Our Services</h2>
          <p className="text-slate-600 max-w-2xl text-left text-base sm:text-lg">
            At DermaCare Clinic, we offer a comprehensive range of advanced dermatological treatments tailored to your skin and hair needs.
          </p>
        </div>

        {/* Arrow controls – hide on small screens */}
        <div className="hidden sm:flex gap-3 justify-end">
          <button
            onClick={() => scroll("left")}
            className="w-10 h-10 rounded-full border border-gray-300 text-xl flex items-center justify-center hover:bg-blue-950 hover:text-white transition"
            aria-label="Scroll Left"
          >
            ←
          </button>
          <button
            onClick={() => scroll("right")}
            className="w-10 h-10 rounded-full border border-gray-300 text-xl flex items-center justify-center hover:bg-blue-950 hover:text-white transition"
            aria-label="Scroll Right"
          >
            →
          </button>
        </div>
      </div>

      {/* Scrollable cards */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2 sm:pb-4 hide-scrollbar"
      >
        {services.map((service, index) => (
          <div
            key={index}
            className="snap-start flex-shrink-0 w-[90%] sm:w-[350px] md:w-[340px] h-72 rounded-xl overflow-hidden shadow-md relative group transition-transform duration-300"
            style={{
              backgroundImage: `url(${service.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Static bottom bar */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-blue-950 bg-opacity-60 text-white z-10">
              <h3 className="text-lg font-semibold">{service.title}</h3>
            </div>

            {/* Hover overlay (desktop only) */}
            <div className="absolute inset-0 hidden sm:flex flex-col justify-end p-6 bg-black bg-opacity-70 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
              <h3 className="text-lg font-semibold">{service.title}</h3>
              <p className="text-sm mt-2">{service.desc}</p>
              <button className="mt-4 inline-flex items-center text-sm text-blue-400 hover:underline">
                Read More <span className="ml-1">→</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
