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
const customer_service_1 = __importDefault(require("../services/customer.service"));
class CustomerController {
    createCustomer(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const customer = yield customer_service_1.default.createCustomer(req.body);
                res.status(201).json(customer);
            }
            catch (error) {
                if (error instanceof Error) {
                    console.error(error.message);
                    res.status(500).json({ message: 'Failed to create customer' });
                }
                else {
                    console.error('An unknown error occurred');
                    res.status(500).json({ message: 'Unknown error' });
                }
            }
        });
    }
    getCustomers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const customers = yield customer_service_1.default.getAllCustomers();
                res.json(customers);
            }
            catch (error) {
                console.error('Failed to fetch customers');
                res.status(500).json({ message: 'Failed to fetch customers' });
            }
        });
    }
    getCustomerById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const customer = yield customer_service_1.default.getCustomerById(req.params.id);
                if (customer) {
                    res.json(customer);
                }
                else {
                    res.status(404).json({ message: 'Customer not found' });
                }
            }
            catch (error) {
                console.error('Failed to fetch customer by ID');
                res.status(500).json({ message: 'Failed to fetch customer' });
            }
        });
    }
    updateCustomer(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const customer = yield customer_service_1.default.updateCustomer(req.params.id, req.body);
                if (customer) {
                    res.json(customer);
                }
                else {
                    res.status(404).json({ message: 'Customer not found' });
                }
            }
            catch (error) {
                console.error('Failed to update customer');
                res.status(500).json({ message: 'Failed to update customer' });
            }
        });
    }
    deleteCustomer(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const customer = yield customer_service_1.default.deleteCustomer(req.params.id);
                if (customer) {
                    res.json({ message: 'Customer deleted successfully' });
                }
                else {
                    res.status(404).json({ message: 'Customer not found' });
                }
            }
            catch (error) {
                res.status(500).json({ message: 'Server error' });
            }
        });
    }
}
exports.default = new CustomerController();
