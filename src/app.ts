import express, { Application } from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import roomRoutes from './routes/room.routes';
import customerRoutes from './routes/customer.routes'; 


const app: Application = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());  
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/room', roomRoutes);  
app.use('/customer', customerRoutes); 

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/mydatabse', {

})
.then(() => console.log('Connected to MongoDB'))
.catch((error) => console.error('Could not connect to MongoDB:', error));

 
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

export default app;
