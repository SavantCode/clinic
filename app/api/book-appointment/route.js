import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import Appointment from '@/models/Appointment';

export async function POST(request) {
  await connectDB();
  const body = await request.json();
  const { fullName, email, phone, service, date, timeSlot, message } = body;

  if (!fullName || !email || !phone || !service || !date || !timeSlot) {
    return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\+?[0-9]{10,15}$/;

  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: 'Invalid email format.' }, { status: 400 });
  }

  if (!phoneRegex.test(phone)) {
    return NextResponse.json({ error: 'Invalid phone number.' }, { status: 400 });
  }

  // Check for duplicate booking
  const existing = await Appointment.findOne({ email, date, timeSlot });
  if (existing) {
    return NextResponse.json({ error: 'This time slot is already booked for this email.' }, { status: 409 });
  }

  const newBooking = new Appointment({
    fullName,
    email,
    phone,
    service,
    date,
    timeSlot,
    message,
  });

  await newBooking.save();

  return NextResponse.json({ success: true, message: 'Appointment booked successfully.' }, { status: 200 });
}
