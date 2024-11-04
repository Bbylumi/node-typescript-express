import mongoose, { Schema, Document } from 'mongoose';

export interface IRoom extends Document {
    name: string;
    capacity: number;
    amenities: string[];
}

const RoomSchema: Schema = new Schema({
    name: { type: String, required: true },
    capacity: { type: Number, required: true },
    amenities: { type: [String], default: [] },
});

export default mongoose.model<IRoom>('Room', RoomSchema);
