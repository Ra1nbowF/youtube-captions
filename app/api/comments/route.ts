import { NextResponse } from 'next/server'
import { MongoClient } from 'mongodb'

const uri = process.env.MONGODB_URI
if (!uri) {
  throw new Error('Please add your MongoDB URI to .env.local')
}

const client = new MongoClient(uri)

async function connectToDatabase() {
  try {
    await client.connect()
    return client.db(process.env.MONGODB_DB)
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error)
    throw error
  }
}

export async function GET() {
  try {
    const db = await connectToDatabase()
    const comments = await db.collection('comments').find({}).toArray()
    return NextResponse.json(comments)
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch comments' },
      { status: 500 }
    )
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const db = await connectToDatabase()
    const result = await db.collection('comments').insertOne(body)
    return NextResponse.json(result)
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to add comment' },
      { status: 500 }
    )
  }
}

