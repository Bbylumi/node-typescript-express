// src/services/customer.service.ts

import Customer, { ICustomer } from '../models/customer.model';
import { CreateCustomerDto, UpdateCustomerDto } from '../dtos/customer.dto';

class CustomerService {
    async createCustomer(data: CreateCustomerDto): Promise<ICustomer> {
        const customer = new Customer(data);
        return await customer.save();
    }

    async getAllCustomers(): Promise<ICustomer[]> {
        return await Customer.find();
    }

    async getCustomerById(id: string): Promise<ICustomer | null> {
        return await Customer.findById(id);
    }

    async updateCustomer(id: string, data: UpdateCustomerDto): Promise<ICustomer | null> {
        return await Customer.findByIdAndUpdate(id, data, { new: true });
    }

    async deleteCustomer(id: string): Promise<ICustomer | null> {
        return await Customer.findByIdAndDelete(id);
    }
}

export default new CustomerService();
