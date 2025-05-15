'use client'; // if using App Router

import { useState } from 'react';
import { FaUser, FaEnvelope, FaPhone, FaCalendarAlt, FaClock } from 'react-icons/fa';

const InputField = ({ label, name, type, value, onChange, icon: Icon }) => (
  <div>
    <label className="block text-sm font-medium text-slate-700 mb-1">{label}</label>
    <div className="relative">
      {Icon && <Icon className="absolute left-3 top-3 text-slate-400 text-sm" />}
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required
        className={`pl-${Icon ? '10' : '3'} pr-3 py-2 w-full text-sm border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500`}
      />
    </div>
  </div>
);

const BookAppointment = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    message: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Appointment submitted:', form);
    alert('Appointment request submitted successfully!');
    setForm({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      message: '',
    });
  };

  return (
    <section className="bg-gradient-to-br from-blue-50 to-white py-20 px-4">
      <div className="max-w-3xl mx-auto bg-white border border-gray-200 shadow-xl rounded-xl p-8">
        <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">
          Book Your Appointment
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid sm:grid-cols-2 gap-6">
            <InputField
              label="Full Name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              icon={FaUser}
            />
            <InputField
              label="Email Address"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              icon={FaEnvelope}
            />
            <InputField
              label="Phone Number"
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              icon={FaPhone}
            />
            <div className="grid grid-cols-2 gap-4">
              <InputField
                label="Preferred Date"
                name="date"
                type="date"
                value={form.date}
                onChange={handleChange}
                icon={FaCalendarAlt}
              />
              <InputField
                label="Preferred Time"
                name="time"
                type="time"
                value={form.time}
                onChange={handleChange}
                icon={FaClock}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Describe Your Concern</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows="4"
              placeholder="e.g. Skin allergy, acne treatment..."
              className="w-full p-3 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <div className="text-center pt-4">
            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-3 bg-blue-900 text-white rounded-md hover:bg-blue-800 transition text-sm font-medium"
            >
              Submit Appointment
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default BookAppointment;
