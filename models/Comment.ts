import mongoose from 'mongoose';

const CommentSchema = new mongoose.Schema({
  comment_id: { type: Number, required: true, unique: true },
  video_id: { type: String, required: true },
  user_id: { type: Number, required: true },
  comment_text: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
});

export default mongoose.models.Comment || mongoose.model('Comment', CommentSchema);

