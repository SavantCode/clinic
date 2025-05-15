'use client';
import React, { useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { MdDateRange, MdAccessTime, MdMedicalServices } from 'react-icons/md';

const checklistItems = [
    "Expert-led treatments with proven results",
    "Safe, hygienic, and patient-centered care",
    "Flexible appointment slots"
];

const services = [
    "Skin Consultation",
    "Hair Fall Treatment",
    "Acne/Scar Removal",
    "Laser Hair Removal",
    "Anti-aging Therapy"
];

const timeSlots = [
    "10:00 AM - 11:00 AM",
    "11:30 AM - 12:30 PM",
    "02:00 PM - 03:00 PM",
    "04:00 PM - 05:00 PM",
    "05:30 PM - 06:30 PM"
];

const BookAppointment = () => {
    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);


    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [bookingDetails, setBookingDetails] = useState(null);


    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setSuccessMessage(null);
        setErrorMessage(null);

        const formData = {
            fullName: e.target.fullName.value,
            email: e.target.email.value,
            phone: e.target.phone.value,
            service: e.target.service.value,
            date: e.target.date.value,
            timeSlot: e.target.timeSlot.value,
            message: e.target.message.value,
        };

        try {
            const res = await fetch('/api/book-appointment', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const result = await res.json();

            if (res.status === 200) {
                setSuccessMessage(result.message);
                setBookingDetails(formData); // ← ADD THIS LINE
                setShowSuccessModal(true);
                e.target.reset(); // ✅ Reset the form fields
            }
            else {
                setErrorMessage(result.error);
            }
        } catch (error) {
            setErrorMessage('There was an error while submitting the form. Please try again later.');
        } finally {
            setLoading(false);
        }
    };


    return (
        <section id="contact" className="bg-slate-900 text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
                {/* Left Content */}
                <div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-center md:text-left mb-6 font-heading">
                        Let’s Begin Your Transformation
                    </h2>
                    <p className="text-slate-300 text-base sm:text-lg lg:text-xl text-center md:text-left mb-8 max-w-2xl mx-auto md:mx-0 font-body">
                        Book a private consultation with our dermatologist today and take the first step toward radiant, confident skin and hair.
                    </p>
                    <ul className="space-y-4 text-left">
                        {checklistItems.map((item, index) => (
                            <li key={index} className="flex items-start space-x-3 text-slate-400 hover:text-blue-400 transition font-body">
                                <FaCheckCircle className="text-blue-500 text-xl shrink-0 mt-1" />
                                <span className="text-sm sm:text-base lg:text-lg">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Right Side Form */}
                <div className="bg-slate-800 p-6 sm:p-8 rounded-xl shadow-xl transition-shadow duration-300 hover:shadow-2xl">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Form Fields */}
                        <div>
                            <label className="block text-sm font-medium mb-1 text-slate-300 font-body">Full Name</label>
                            <input type="text" name="fullName" required className="w-full px-4 py-3 rounded-md bg-slate-700 text-white border border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Jane Doe" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1 text-slate-300 font-body">Email</label>
                            <input type="email" name="email" required className="w-full px-4 py-3 rounded-md bg-slate-700 text-white border border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="you@example.com" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1 text-slate-300 font-body">Phone</label>
                            <input type="tel" name="phone" required className="w-full px-4 py-3 rounded-md bg-slate-700 text-white border border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="+91 9876543210" />
                        </div>

                        {/* Service Selection */}
                        <div>
                            <label className=" text-sm font-medium mb-1 text-slate-300 font-body flex items-center gap-1">
                                <MdMedicalServices className="text-xl text-blue-400" /> Select Service
                            </label>
                            <select name="service" required className="w-full px-4 py-3 bg-slate-700 text-white rounded-md border border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                <option value="">Choose a service</option>
                                {services.map((service, i) => (
                                    <option key={i} value={service}>{service}</option>
                                ))}
                            </select>
                        </div>

                        {/* Preferred Date */}
                        <div>
                            <label className=" text-sm font-medium mb-1 text-slate-300 font-body flex items-center gap-1">
                                <MdDateRange className="text-xl text-blue-400" /> Preferred Date
                            </label>
                            <input type="date" name="date" required className="w-full px-4 py-3 bg-slate-700 text-white rounded-md border border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>

                        {/* Preferred Time */}
                        <div>
                            <label className=" text-sm font-medium mb-1 text-slate-300 font-body flex items-center gap-1">
                                <MdAccessTime className="text-xl text-blue-400" /> Preferred Time Slot
                            </label>
                            <select name="timeSlot" required className="w-full px-4 py-3 bg-slate-700 text-white rounded-md border border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                <option value="">Select a time slot</option>
                                {timeSlots.map((slot, i) => (
                                    <option key={i} value={slot}>{slot}</option>
                                ))}
                            </select>
                        </div>

                        {/* Message */}
                        <div>
                            <label className="block text-sm font-medium mb-1 text-slate-300 font-body">Message</label>
                            <textarea name="message" rows="4" className="w-full px-4 py-3 rounded-md bg-slate-700 text-white border border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Let us know how we can help..." />
                        </div>

                        {/* Success/Error Message */}
                        {/* {successMessage && <div className="text-green-500">{successMessage}</div>} */}
                        {errorMessage && <div className="text-red-500">{errorMessage}</div>}

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full py-3 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base lg:text-lg transition disabled:bg-blue-400"
                        >
                            {loading ? (
                                <span className="flex justify-center items-center">
                                    <svg className="animate-spin h-5 w-5 mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" />
                                        <path className="opacity-75" d="M4 12a8 8 0 018-8v4l5-5-5-5v4a12 12 0 100 8h4l-5-5-5 5z" />
                                    </svg>
                                    Submitting...
                                </span>
                            ) : (
                                'Book Appointment'
                            )}
                        </button>
                    </form>

                    {showSuccessModal && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4 sm:px-6">
    <div className="bg-white w-full max-w-md rounded-2xl p-6 sm:p-8 md:p-10 shadow-xl text-center border border-gray-200">

      {/* Check Icon */}
      <div className="flex items-center justify-center mb-6">
        <div className="bg-emerald-100 text-emerald-600 rounded-full w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center shadow-sm">
          <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
      </div>

      {/* Title */}
      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-blue-600 mb-2">
        Appointment Confirmed
      </h2>

      {/* Subtext */}
      <p className="text-gray-600 text-sm sm:text-base mb-4">
        Thanks, <span className="font-medium text-gray-800">{bookingDetails?.fullName}</span>.
      </p>

      {/* Details */}
      <div className="text-gray-500 text-sm sm:text-base space-y-1 mb-6 leading-relaxed">
        <p>
          Service: <span className="font-medium text-gray-700">{bookingDetails?.service}</span>
        </p>
        <p>
          Date: <span className="font-medium text-gray-700">{bookingDetails?.date}</span>
        </p>
        <p>
          Time: <span className="font-medium text-gray-700">{bookingDetails?.timeSlot}</span>
        </p>
      </div>

      {/* Close Button */}
      <button
        onClick={() => setShowSuccessModal(false)}
        className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-2.5 text-sm sm:text-base font-medium text-white bg-blue-500 hover:bg-blue-600 transition rounded-full shadow-sm"
      >
        Close
      </button>
    </div>
  </div>
)}



                </div>
            </div>
        </section>
    );
};

export default BookAppointment;
