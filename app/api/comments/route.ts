import { NextResponse } from 'next/server'
import { MongoClient } from 'mongodb'

const uri = process.env.MONGODB_URI as string
if (!uri) {
  throw new Error('Please add your MongoDB URI to .env.local')
}

const dbName = process.env.MONGODB_DB
if (!dbName) {
  throw new Error('Please add your MongoDB database name to .env.local')
}

let client: MongoClient | null = null

async function getMongoClient() {
  if (client) return client
  client = new MongoClient(uri, {
    maxPoolSize: 10,
    minPoolSize: 5
  })
  await client.connect()
  return client
}

export async function GET() {
  try {
    const client = await getMongoClient()
    const db = client.db(dbName)
    const comments = await db.collection('comments').find({}).toArray()
    return NextResponse.json(comments)
  } catch (error) {
    console.error('GET error:', error)
    return NextResponse.json({ error: 'Failed to fetch comments' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const client = await getMongoClient()
    const db = client.db(dbName)
    const result = await db.collection('comments').insertOne(body)
    return NextResponse.json(result)
  } catch (error) {
    console.error('POST error:', error)
    return NextResponse.json({ error: 'Failed to add comment' }, { status: 500 })
  }
}

