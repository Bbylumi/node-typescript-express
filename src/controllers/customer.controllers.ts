 
import { Request, Response } from 'express';
import CustomerService from '../services/customer.service';

class CustomerController {
    async createCustomer(req: Request, res: Response): Promise<void> {
        try {
            const customer = await CustomerService.createCustomer(req.body);
            res.status(201).json(customer);
        } catch (error) {
            if (error instanceof Error) {
                console.error(error.message);
                res.status(500).json({ message: 'Failed to create customer' });
            } else {
                console.error('An unknown error occurred');
                res.status(500).json({ message: 'Unknown error' });
            }
        }
    }

    async getCustomers(req: Request, res: Response): Promise<void> {
        try {
            const customers = await CustomerService.getAllCustomers();
            res.json(customers);
        } catch (error) {
            console.error('Failed to fetch customers');
            res.status(500).json({ message: 'Failed to fetch customers' });
        }
    }

    async getCustomerById(req: Request, res: Response): Promise<void> {
        try {
            const customer = await CustomerService.getCustomerById(req.params.id);
            if (customer) {
                res.json(customer);
            } else {
                res.status(404).json({ message: 'Customer not found' });
            }
        } catch (error) {
            console.error('Failed to fetch customer by ID');
            res.status(500).json({ message: 'Failed to fetch customer' });
        }
    }

    async updateCustomer(req: Request, res: Response): Promise<void> {
        try {
            const customer = await CustomerService.updateCustomer(req.params.id, req.body);
            if (customer) {
                res.json(customer);
            } else {
                res.status(404).json({ message: 'Customer not found' });
            }
        } catch (error) {
            console.error('Failed to update customer');
            res.status(500).json({ message: 'Failed to update customer' });
        }
    }

    async deleteCustomer(req: Request, res: Response): Promise<void> {
        try {
            const customer = await CustomerService.deleteCustomer(req.params.id);
            if (customer) {
                res.json({ message: 'Customer deleted successfully' });
            } else {
                res.status(404).json({ message: 'Customer not found' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Server error' });
        }
    }
}

export default new CustomerController();
