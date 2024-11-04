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
exports.deleteCustomer = exports.updateCustomer = exports.getCustomers = exports.createCustomer = void 0;
const customer_model_1 = __importDefault(require("../models/customer.model"));
// Create a new customer
const createCustomer = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email, phone, address } = req.body;
        const newCustomer = new customer_model_1.default({ name, email, phone, address });
        yield newCustomer.save();
        res.status(201).json(newCustomer);
    }
    catch (error) {
        next(error);
    }
});
exports.createCustomer = createCustomer;
// Get all customers
const getCustomers = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const customers = yield customer_model_1.default.find();
        res.json(customers);
    }
    catch (error) {
        next(error);
    }
});
exports.getCustomers = getCustomers;
// Update customer by ID
const updateCustomer = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedCustomer = yield customer_model_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedCustomer) {
            return res.status(404).json({ message: 'Customer not found' });
        }
        res.json(updatedCustomer);
    }
    catch (error) {
        next(error);
    }
});
exports.updateCustomer = updateCustomer;
// Delete customer by ID
const deleteCustomer = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedCustomer = yield customer_model_1.default.findByIdAndDelete(req.params.id);
        if (!deletedCustomer) {
            return res.status(404).json({ message: 'Customer not found' });
        }
        res.status(204).send();
    }
    catch (error) {
        next(error);
    }
});
exports.deleteCustomer = deleteCustomer;
