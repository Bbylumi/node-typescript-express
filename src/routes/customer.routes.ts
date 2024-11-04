// routes/customer.routes.ts
import { Router } from 'express';
import { createCustomer, getCustomers, updateCustomer, deleteCustomer } from '../controllers/customer.controllers';

const router = Router();

router.post('/', createCustomer);
router.get('/', getCustomers);

export default router;
