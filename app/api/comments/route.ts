import { NextResponse } from 'next/server'
import dbConnect from '@/lib/mongodb'
import Comment from '@/models/Comment'

export async function POST(request: Request) {
  const body = await request.json()
  const { videoId, user, userAvatar, content } = body

  try {
    await dbConnect()

    const comment = new Comment({
      videoId,
      user,
      userAvatar,
      content,
    })

    await comment.save()

    return NextResponse.json({ message: 'Comment added successfully' }, { status: 201 })
  } catch (error) {
    console.error("Failed to add comment:", error);
    return NextResponse.json({ message: 'Failed to add comment' }, { status: 500 })
  }
}

