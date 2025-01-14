import { NextResponse } from 'next/server'
import connectToDatabase from '@/lib/mongodb'

export async function GET() {
  try {
    const db = await connectToDatabase()
    if (!db) {
      throw new Error('Failed to connect to database')
    }

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
    if (!db) {
      throw new Error('Failed to connect to database')
    }

    const result = await db.collection('comments').insertOne(body)
    return NextResponse.json(result)
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to add comment' },
      { status: 500 }
    )
  }
}

