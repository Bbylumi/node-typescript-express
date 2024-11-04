import { Request, Response } from 'express';
import RoomService from '../services/room.service';


class RoomController {
    async createRoom(req: Request, res: Response): Promise<void> {
        try {
            // some code that may throw an error
            const room = await RoomService.createRoom(req.body);
            res.status(201).json(room);
        } catch (error) {
            if (error instanceof Error) {
                console.error(error.message); // Access the message property safely
            } else {
                console.error('An unknown error occurred');
            }
        }
    }

    async getRooms(req: Request, res: Response): Promise<void> {
        const rooms = await RoomService.getRooms();
        res.json(rooms);
    }

    async getRoomById(req: Request, res: Response): Promise<void> {
        const room = await RoomService.getRoomById(req.params.id);
        if (room) {
            res.json(room);
        } else {
            res.status(404).json({ message: 'Room not found' });
        }
    }

    async updateRoom(req: Request, res: Response): Promise<void> {
        const room = await RoomService.updateRoom(req.params.id, req.body);
        if (room) {
            res.json(room);
        } else {
            res.status(404).json({ message: 'Room not found' });
        }
    }

    async deleteRoom(req: Request, res: Response): Promise<void> {
        const room = await RoomService.deleteRoom(req.params.id);
        if (room) {
            res.json({ message: 'Room deleted' });
        } else {
            res.status(404).json({ message: 'Room not found' });
        }
    }
}

export default new RoomController();
