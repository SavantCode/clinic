// components/ui/BookAppointment.jsx
import React from 'react';

const BookAppointment = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div>
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Book an Appointment
          </h2>
          <p className="text-slate-600 text-base mb-6">
            Ready to take the next step? Fill out the form and our team will get back to you shortly to schedule your consultation.
          </p>
          <ul className="text-slate-600 text-sm space-y-2">
            <li>✅ Expert guidance by certified dermatologist</li>
            <li>✅ 100% personalized treatment plans</li>
            <li>✅ Clean, modern clinic environment</li>
          </ul>
        </div>

        {/* Form */}
        <div className="bg-blue-50 p-8 rounded-xl shadow-md">
          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                required
                className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                required
                className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                required
                className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="+91 9876543210"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Message
              </label>
              <textarea
                rows="4"
                className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Let us know what you're looking for..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-all font-medium"
            >
              Submit Appointment Request
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookAppointment;
