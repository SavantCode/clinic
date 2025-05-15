import React from 'react';

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
  // Add more if needed
];

const Services = () => {
  return (
    <section id="services" className="mt-28 px-4 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-slate-800 mb-3.5">Our Services</h2>
      <p className="max-w-2xl text-left text-slate-600 mb-12 text-base">
        At DermaCare Clinic, we offer a comprehensive range of advanced dermatological treatments tailored to your skin and hair needs.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative group h-64 rounded-xl overflow-hidden shadow-lg cursor-pointer"
            style={{
              backgroundImage: `url(${service.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: 0.9,
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-end p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
