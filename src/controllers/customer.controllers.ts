// controllers/customer.controller.ts
import { Request, Response, NextFunction } from 'express';
import Customer from '../models/customer.model';

// Create a new customer
export const createCustomer = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, email, phone, address } = req.body;
    const newCustomer = new Customer({ name, email, phone, address });
    await newCustomer.save();
    res.status(201).json(newCustomer);
  } catch (error) {
    next(error);
  }
};

// Get all customers
export const getCustomers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const customers = await Customer.find();
    res.json(customers);
  } catch (error) {
    next(error);
  }
};

// Update customer by ID
export const updateCustomer = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const updatedCustomer = await Customer.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedCustomer) {
      return res.status(404).json({ message: 'Customer not found' });
    }
    res.json(updatedCustomer);
  } catch (error) {
    next(error);
  }
};

// Delete customer by ID
export const deleteCustomer = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const deletedCustomer = await Customer.findByIdAndDelete(req.params.id);
    if (!deletedCustomer) {
      return res.status(404).json({ message: 'Customer not found' });
    }
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};
