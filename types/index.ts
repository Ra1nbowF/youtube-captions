export interface Video {
  video_id: string;
  user_id: number;
  title: string;
  description?: string;
  tldr?: string;
  captions?: string;
  upload_date: string;
  thumbnail_url: string;
  video_url: string;
  category_id?: number;
  views: number;
  likes: number;
  comments: number;
}

export interface User {
  user_id: number;
  username: string;
  profile_picture_url?: string;
}

export interface Comment {
  comment_id: number;
  video_id: string;
  user_id: number;
  comment_text: string;
  timestamp: string;
}

export interface Category {
  category_id: number;
  category_name: string;
}

