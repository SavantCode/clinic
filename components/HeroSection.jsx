import React from 'react'

const HeroSection = () => {
  return (
    <section id="home" suppressHydrationWarning={true} className="flex flex-col-reverse md:flex-row items-center gap-10 mt-0">
      <div className="text-center md:w-1/2 md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-6 leading-tight font-heading">
          Glow Naturally. <br />
          Treat Professionally.
        </h1>

        <p className="text-slate-600 mb-8 font-body">
          Get expert skincare and hair solutions from a certified dermatologist with over 10+ years of experience. Start your transformation today.
        </p>
        <a href="#contact" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition">
          Book an Appointment
        </a>
      </div>
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

export default HeroSection;
