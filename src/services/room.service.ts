import Room, { IRoom } from '../models/room.model';
import { CreateRoomDto, UpdateRoomDto } from '../dtos/room.dto';


class RoomService {
    async createRoom(data: CreateRoomDto): Promise<IRoom> {
        const room = new Room(data);
        return await room.save();
    }

    async getRooms(): Promise<IRoom[]> {
        return await Room.find();
    }

    async getRoomById(id: string): Promise<IRoom | null> {
        return await Room.findById(id);
    }

    async updateRoom(id: string, data: UpdateRoomDto): Promise<IRoom | null> {
        return await Room.findByIdAndUpdate(id, data, { new: true });
    }

    async deleteRoom(id: string): Promise<IRoom | null> {
        return await Room.findByIdAndDelete(id);
    }
}

export default new RoomService();
