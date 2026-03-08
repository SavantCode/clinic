'use client';
import React from 'react';

const schedule = [
  { day: 'Monday', clinic: 'SkinCare Central Clinic', timing: '10:00 AM – 1:00 PM' },
  { day: 'Tuesday', clinic: 'HealthFirst Medical Hub', timing: '3:00 PM – 6:30 PM' },
  { day: 'Wednesday', clinic: 'SkinCare Central Clinic', timing: '10:00 AM – 1:00 PM' },
  { day: 'Thursday', clinic: 'CityDerm Specialty Center', timing: '11:00 AM – 2:00 PM' },
  { day: 'Friday', clinic: 'HealthFirst Medical Hub', timing: '10:00 AM – 12:30 PM' },
  { day: 'Saturday', clinic: 'SkinCare Central Clinic', timing: '9:00 AM – 1:00 PM' },
  { day: 'Sunday', clinic: '—', timing: 'Closed' },
];

const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });

const Schedule = () => {
  return (
    <section id="schedule" className="bg-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8">

      <div className="max-w-5xl mx-auto">

        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-2">
          Doctor's Schedule
        </h2>

        <p className="text-slate-400 text-center mb-12">
          Weekly availability across clinics
        </p>

        {/* Desktop Table */}
        <div className="hidden md:block rounded-xl border border-slate-700 overflow-hidden">
          <table className="w-full text-sm lg:text-base">
            <thead>
              <tr className="bg-blue-600 text-left">
                <th className="px-6 py-4">Day</th>
                <th className="px-6 py-4">Clinic</th>
                <th className="px-6 py-4">Timing</th>
              </tr>
            </thead>

            <tbody>
              {schedule.map((row, i) => {
                const isToday = row.day === today;
                const isClosed = row.timing === 'Closed';

                return (
                  <tr
                    key={i}
                    className={`border-t border-slate-700
                    ${isToday ? 'bg-blue-600/10' : 'bg-slate-800 hover:bg-slate-700/60'}
                    transition`}
                  >
                    <td className="px-6 py-4 font-semibold flex items-center gap-2">
                      {row.day}

                      {isToday && (
                        <span className="text-xs bg-emerald-500/20 text-emerald-400 px-2 py-1 rounded-full">
                          Today
                        </span>
                      )}
                    </td>

                    <td className={`${isClosed ? 'text-slate-500' : 'text-slate-300'} px-6 py-4`}>
                      {row.clinic}
                    </td>

                    <td className={`${isClosed ? 'text-red-400' : 'text-blue-300'} px-6 py-4 font-medium`}>
                      {row.timing}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-4">
          {schedule.map((row, i) => {
            const isToday = row.day === today;
            const isClosed = row.timing === 'Closed';

            return (
              <div
                key={i}
                className={`rounded-xl border border-slate-700 p-4 bg-slate-800
                ${isToday ? 'ring-2 ring-blue-500' : ''}
                `}
              >
                <div className="flex justify-between items-center mb-2">

                  <h3 className="font-semibold text-lg">
                    {row.day}
                  </h3>

                  {isToday && (
                    <span className="text-xs bg-emerald-500/20 text-emerald-400 px-2 py-1 rounded-full">
                      Today
                    </span>
                  )}
                </div>

                <p className={`${isClosed ? 'text-slate-500' : 'text-slate-300'} text-sm`}>
                  {row.clinic}
                </p>

                <p className={`${isClosed ? 'text-red-400' : 'text-blue-400'} mt-2 font-medium`}>
                  {row.timing}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Schedule;