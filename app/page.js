// app/page.jsx
import React from 'react'
import HeroSection from '../components/HeroSection'
import About from '../components/About'
import Services from '@/components/Services'
import WhyChooseUs from '@/components/WhyChooseUs'
import Testimonials from '@/components/Testimonials'
import ReadyToTransform from '@/components/ReadyToTransform'
import BookAppointment from '@/components/BookAppointment'

import Schedule from '@/components/Schedule'


export default function Home() {
  return (
    <>
      <main className="max-w-7xl mx-auto px-6 py-8 scroll-smooth">

        {/* Hero Section */}
        <section id="hero">
          <HeroSection />
        </section>

        {/* About Section */}
        <section id="about">
          <About />
        </section>

        {/* Schedule Section */}
        <section id="schedule">
          <Schedule />
        </section>

        {/* Services */}
        <section id="services">
          <Services />
        </section>

        {/* Why Choose Us */}
        <section id="why">
          <WhyChooseUs />
        </section>

        {/* Testimonials */}
        <section id="testimonials">
          <Testimonials />
        </section>

        {/* CTA */}
        <section id="cta">
          <ReadyToTransform />
        </section>

      </main>


      {/* Book Appointment */}
      <section id="contact">
        <BookAppointment />
      </section>
    </>
  )
}
