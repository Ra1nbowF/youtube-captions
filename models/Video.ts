import mongoose from 'mongoose';

const VideoSchema = new mongoose.Schema({
  video_id: { type: String, required: true, unique: true },
  user_id: { type: Number, required: true },
  title: { type: String, required: true },
  description: String,
  tldr: String,
  captions: String,
  upload_date: { type: Date, required: true, default: Date.now },
  thumbnail_url: { type: String, required: true },
  video_url: { type: String, required: true },
  category_id: Number,
  views: { type: Number, default: 0 },
  likes: { type: Number, default: 0 },
  comments: { type: Number, default: 0 },
});

export default mongoose.models.Video || mongoose.model('Video', VideoSchema);

