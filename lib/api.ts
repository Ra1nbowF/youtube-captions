import { Video, Comment, User, Category } from '@/types';
import dbConnect from './mongodb';
import VideoModel from '@/models/Video';
import UserModel from '@/models/User';
import CommentModel from '@/models/Comment';
import CategoryModel from '@/models/Category';

async function handleDatabaseOperation<T>(operation: () => Promise<T>): Promise<T> {
  try {
    await dbConnect();
    return await operation();
  } catch (error) {
    console.error("Database operation failed:", error);
    throw new Error("Failed to perform database operation");
  }
}

export async function getVideos(): Promise<Video[]> {
  return handleDatabaseOperation(async () => {
    const videos = await VideoModel.find({}).limit(8).lean();
    return videos.map((video) => ({
      ...video,
      video_id: video.video_id.toString(),
      upload_date: video.upload_date.toISOString(),
    }));
  });
}

export async function getVideoById(id: string): Promise<Video | null> {
  return handleDatabaseOperation(async () => {
    const video = await VideoModel.findOne({ video_id: id }).lean();
    if (!video) return null;
    return {
      ...video,
      video_id: video.video_id.toString(),
      upload_date: video.upload_date.toISOString(),
    };
  });
}

export async function getCommentsByVideoId(videoId: string): Promise<Comment[]> {
  return handleDatabaseOperation(async () => {
    const comments = await CommentModel.find({ video_id: videoId }).sort({ timestamp: -1 }).limit(10).lean();
    return comments.map((comment) => ({
      ...comment,
      comment_id: comment.comment_id.toString(),
      timestamp: comment.timestamp.toISOString(),
    }));
  });
}

export async function getRelatedVideos(currentVideoId: string): Promise<Video[]> {
  return handleDatabaseOperation(async () => {
    const currentVideo = await VideoModel.findOne({ video_id: currentVideoId });
    if (!currentVideo) return [];
    
    const relatedVideos = await VideoModel.find({ 
      category_id: currentVideo.category_id,
      video_id: { $ne: currentVideoId }
    }).limit(3).lean();

    return relatedVideos.map((video) => ({
      ...video,
      video_id: video.video_id.toString(),
      upload_date: video.upload_date.toISOString(),
    }));
  });
}

export async function getUserById(userId: number): Promise<User | null> {
  return handleDatabaseOperation(async () => {
    const user = await UserModel.findOne({ user_id: userId }).lean();
    if (!user) return null;
    return user;
  });
}

export async function getCategoryById(categoryId: number): Promise<Category | null> {
  return handleDatabaseOperation(async () => {
    const category = await CategoryModel.findOne({ category_id: categoryId }).lean();
    if (!category) return null;
    return category;
  });
}

