// controllers/user.controller.ts
import { Request, Response, NextFunction } from 'express';
import User from '../models/user.model';

// Create User
export const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, email, password, role } = req.body;
    const newUser = new User({ name, email, password, role });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    next(error); // Forward error to centralized handler
  }
};

// Get All Users
export const getUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    next(error);
  }
};

// Update User
export const updateUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedUser) {
      res.status(404).json({ message: 'User not found' });
    } else {
      res.json(updatedUser);
    }
  } catch (error) {
    next(error);
  }
};

// Delete User
export const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) {
      res.status(404).json({ message: 'User not found' });
    } else {
      res.status(204).send();
    }
  } catch (error) {
    next(error);
  }
};
