// models/customer.model.ts
import mongoose, { Schema, Document } from 'mongoose';

 
export interface ICustomer extends Document {
  name: string;
  email: string;
  phone: string;
  address: string;
}

const CustomerSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true }
});

 
export default mongoose.model<ICustomer>('Customer', CustomerSchema);
