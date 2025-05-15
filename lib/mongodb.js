// lib/mongodb.js

import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

let cached = global._mongoose;

if (!cached) {
  cached = global._mongoose = { conn: null, promise: null };
}

async function connectDB() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
      bufferCommands: false,
    }).then((mongoose) => mongoose);
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

export { connectDB };
