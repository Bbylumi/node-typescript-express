"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// routes/user.routes.ts
const express_1 = require("express");
const user_controllers_1 = require("../controllers/user.controllers");
const router = (0, express_1.Router)();
router.post('/', user_controllers_1.createUser);
router.get('/', user_controllers_1.getUsers);
exports.default = router;
