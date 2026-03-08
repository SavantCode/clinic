import React from 'react'

const HeroSection = () => {
  const phoneNumber = "+91 98765 43210"   // Displayed number
  const dialNumber = "+919876543210"      // Number used in tel: link

  return (
    <section
      id="home"
      suppressHydrationWarning={true}
      className="flex flex-col-reverse md:flex-row items-center gap-10 mt-0"
    >

      {/* LEFT SECTION: Text & Buttons */}
      <div className="text-center md:w-1/2 md:text-left">

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-6 leading-tight font-heading">
          Glow Naturally. <br />
          Treat Professionally.
        </h1>

        {/* Description */}
        <p className="text-slate-600 mb-8 font-body">
          Get expert skincare and hair solutions from a certified dermatologist with over 10+ years of experience. Start your transformation today.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">

          {/* Book Appointment */}
          <a
            href="#contact"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition font-medium"
          >
            Book an Appointment
          </a>

          {/* Simple Call Now Button */}
          <a
            href={`tel:${dialNumber}`}
            className="inline-block border border-blue-600 text-blue-600 px-6 py-3 rounded-md hover:bg-blue-600 hover:text-white transition font-medium"
          >
            📞 Call Now
          </a>

        </div>

        {/* PREMIUM CALL CARD */}
        <a
          href={`tel:${dialNumber}`}
          className="mt-6 inline-flex items-center gap-4 bg-blue-50 border border-blue-100 px-5 py-4 rounded-xl hover:bg-blue-100 transition group"
        >
          {/* Icon */}
          <div className="bg-blue-600 text-white w-12 h-12 flex items-center justify-center rounded-full text-xl group-hover:scale-105 transition">
            📞
          </div>

          {/* Text */}
          <div className="text-left">
            <p className="text-sm text-slate-500 font-body">
              Call for quick consultation
            </p>

            <p className="text-xl md:text-2xl font-bold text-blue-600 leading-tight">
              {phoneNumber}
            </p>

            <p className="text-xs text-slate-400 mt-1">
              Available 9:00 AM – 6:00 PM
            </p>
          </div>
        </a>

      </div>

      {/* RIGHT SECTION: Hero Image */}
      <div className="md:w-1/2 w-full flex justify-center md:justify-end px-4">
        <div className="w-40 h-40 md:w-full md:h-[80vh] max-w-6xl mx-auto">

          <img
            src="/hero.png"
            alt="Dermatology Banner hero image"
            className="w-full h-full object-cover rounded-full md:rounded-lg shadow-lg transition-all duration-500"
          />

        </div>
      </div>

    </section>
  )
}

export default HeroSection