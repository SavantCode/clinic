'use client';
import React, { useState } from 'react';

const AppointmentForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Appointment Requested:', form);
    // Integrate your backend or email API here
  };

  return (
    <section className="px-4 py-20 bg-blue-50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 text-center mb-4">
          Book an Appointment
        </h2>
        <p className="text-center text-slate-600 mb-10">
          Schedule your consultation with our expert dermatologist today.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-slate-700 font-medium mb-1">Name</label>
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full border border-slate-300 rounded-lg px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-slate-700 font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full border border-slate-300 rounded-lg px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="phone" className="block text-slate-700 font-medium mb-1">Phone</label>
              <input
                type="tel"
                name="phone"
                required
                value={form.phone}
                onChange={handleChange}
                className="w-full border border-slate-300 rounded-lg px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="service" className="block text-slate-700 font-medium mb-1">Service</label>
              <select
                name="service"
                required
                value={form.service}
                onChange={handleChange}
                className="w-full border border-slate-300 rounded-lg px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select a service</option>
                <option value="Skin Treatment">Skin Treatment</option>
                <option value="Hair Restoration">Hair Restoration</option>
                <option value="Laser Therapy">Laser Therapy</option>
                <option value="Consultation">Consultation</option>
                <option value="Consultation">Other</option>
              </select>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="date" className="block text-slate-700 font-medium mb-1">Preferred Date</label>
              <input
                type="date"
                name="date"
                required
                value={form.date}
                onChange={handleChange}
                className="w-full border border-slate-300 rounded-lg px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="time" className="block text-slate-700 font-medium mb-1">Preferred Time</label>
              <input
                type="time"
                name="time"
                required
                value={form.time}
                onChange={handleChange}
                className="w-full border border-slate-300 rounded-lg px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow transition duration-200"
          >
            Schedule Appointment
          </button>
        </form>
      </div>
    </section>
  );
};

export default AppointmentForm;
