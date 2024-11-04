"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const room_controller_1 = __importDefault(require("../controllers/room.controller"));
const router = (0, express_1.Router)();
router.post('/', room_controller_1.default.createRoom);
router.get('/', room_controller_1.default.getRooms);
router.get('/:id', room_controller_1.default.getRoomById);
router.put('/:id', room_controller_1.default.updateRoom);
router.delete('/:id', room_controller_1.default.deleteRoom);
exports.default = router;
