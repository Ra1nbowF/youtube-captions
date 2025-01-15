import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import mongoose from 'mongoose';

export async function GET() {
  try {
    await dbConnect();
    console.log('Connected to MongoDB');
    
    const db = mongoose.connection.db;
    if (!db) {
      throw new Error('Database not found');
    }
    
    const comments = await db.collection('comments').find({}).toArray();
    console.log('Retrieved comments:', comments.length);
    
    return NextResponse.json(comments);
  } catch (error) {
    console.error('GET error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch comments' }, 
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    await dbConnect();
    const body = await request.json();
    
    const db = mongoose.connection.db;
    const result = await db.collection('comments').insertOne(body);
    
    return NextResponse.json(result);
  } catch (error) {
    console.error('POST error:', error);
    return NextResponse.json(
      { error: 'Failed to add comment' }, 
      { status: 500 }
    );
  }
}

