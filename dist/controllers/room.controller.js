"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const room_service_1 = __importDefault(require("../services/room.service"));
class RoomController {
    createRoom(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // some code that may throw an error
                const room = yield room_service_1.default.createRoom(req.body);
                res.status(201).json(room);
            }
            catch (error) {
                if (error instanceof Error) {
                    console.error(error.message); // Access the message property safely
                }
                else {
                    console.error('An unknown error occurred');
                }
            }
        });
    }
    getRooms(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const rooms = yield room_service_1.default.getRooms();
            res.json(rooms);
        });
    }
    getRoomById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const room = yield room_service_1.default.getRoomById(req.params.id);
            if (room) {
                res.json(room);
            }
            else {
                res.status(404).json({ message: 'Room not found' });
            }
        });
    }
    updateRoom(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const room = yield room_service_1.default.updateRoom(req.params.id, req.body);
            if (room) {
                res.json(room);
            }
            else {
                res.status(404).json({ message: 'Room not found' });
            }
        });
    }
    deleteRoom(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const room = yield room_service_1.default.deleteRoom(req.params.id);
            if (room) {
                res.json({ message: 'Room deleted' });
            }
            else {
                res.status(404).json({ message: 'Room not found' });
            }
        });
    }
}
exports.default = new RoomController();
