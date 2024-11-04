 import mongoose, { Schema, Document } from 'mongoose';

interface User extends Document {
  name: string;
  email: string;
  password: string;
  role: string;  
}

const UserSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, default: 'user' }
});

export default mongoose.model<User>('User', UserSchema);
