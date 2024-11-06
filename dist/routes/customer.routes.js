"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/customer.routes.ts
const express_1 = require("express");
const customer_controllers_1 = __importDefault(require("../controllers/customer.controllers"));
const router = (0, express_1.Router)();
router.post('/', customer_controllers_1.default.createCustomer);
router.get('/', customer_controllers_1.default.getCustomers);
router.get('/:id', customer_controllers_1.default.getCustomerById);
router.put('/:id', customer_controllers_1.default.updateCustomer);
router.delete('/:id', customer_controllers_1.default.deleteCustomer);
exports.default = router;
