import mongoose, { Schema, Document } from 'mongoose';

interface IComment extends Document {
  text: string;
  author: string;
  // Add other fields as necessary
}

const CommentSchema: Schema = new Schema({
  text: { type: String, required: true },
  author: { type: String, required: true },
  // Add other fields as necessary
});

export default mongoose.models.Comment || mongoose.model<IComment>('Comment', CommentSchema);

