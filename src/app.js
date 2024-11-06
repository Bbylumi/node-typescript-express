const express = require('express');
const roomRoutes = require('./routes/room.routes');
const customerRoutes = require('./routes/customer.routes')

const app = express();
app.use(express.json());

app.use('/room', roomRoutes);
app.use('/customer', customerRoutes)

app.listen(5000, () => console.log('Server running on port 5000'));
