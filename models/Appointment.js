import mongoose from 'mongoose';

const AppointmentSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  phone: String,
  date: String,
  timeSlot: String,
  service: String,
  message: String, 
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Appointment || mongoose.model('Appointment', AppointmentSchema);
// This schema defines the structure of the appointment data that will be stored in the MongoDB database.