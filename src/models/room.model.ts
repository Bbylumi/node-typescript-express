import mongoose, { Schema, Document } from 'mongoose';

interface Room extends Document {
  roomNumber: number;
  type: string; // e.g., 'single', 'double', 'suite'
  price: number;
  isAvailable: boolean;
}

const RoomSchema: Schema = new Schema({
  roomNumber: { type: Number, required: true, unique: true },
  type: { type: String, required: true },
  price: { type: Number, required: true },
  isAvailable: { type: Boolean, default: true }
});

export default mongoose.model<Room>('Room', RoomSchema);
