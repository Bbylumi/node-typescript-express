"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// routes/customer.routes.ts
const express_1 = require("express");
const customer_controllers_1 = require("../controllers/customer.controllers");
const router = (0, express_1.Router)();
router.post('/', customer_controllers_1.createCustomer);
router.get('/', customer_controllers_1.getCustomers);
exports.default = router;
