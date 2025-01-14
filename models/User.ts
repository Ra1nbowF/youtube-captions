import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  user_id: { type: Number, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  profile_picture_url: String,
});

export default mongoose.models.User || mongoose.model('User', UserSchema);

