import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '@/lib/mongodb';
import Comment from '@/models/Comment'; // Assuming you have a Comment model

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await dbConnect();

  switch (req.method) {
    case 'GET':
      try {
        const comments = await Comment.find({});
        res.status(200).json(comments);
      } catch (error) {
        res.status(500).json({ error: 'Failed to fetch comments' });
      }
      break;
    case 'POST':
      try {
        const comment = new Comment(req.body);
        await comment.save();
        res.status(201).json(comment);
      } catch (error) {
        res.status(400).json({ error: 'Failed to create comment' });
      }
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

