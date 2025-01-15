import mongoose from 'mongoose';

interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

declare global {
  var mongoose: MongooseCache;
}

const cached: MongooseCache = global.mongoose || { conn: null, promise: null };

if (!global.mongoose) {
  global.mongoose = cached;
}

async function dbConnect() {
  if (!process.env.MONGODB_URI) {
    throw new Error('Please define the MONGODB_URI environment variable');
  }

  try {
    if (cached.conn) {
      console.log('Using cached MongoDB connection');
      return cached.conn;
    }

    if (!cached.promise) {
      const opts = { 
        bufferCommands: false,
        serverSelectionTimeoutMS: 5000,
        socketTimeoutMS: 45000,
      };

      console.log('Connecting to MongoDB...');
      cached.promise = mongoose.connect(process.env.MONGODB_URI, opts);
    }

    cached.conn = await cached.promise;
    console.log('MongoDB connected successfully');
    
    mongoose.connection.on('error', (err) => {
      console.error('MongoDB connection error:', err);
      cached.conn = null;
      cached.promise = null;
    });

    return cached.conn;
  } catch (e) {
    console.error('Failed to connect to MongoDB:', e);
    cached.promise = null;
    cached.conn = null;
    throw e;
  }
}

export default dbConnect;

