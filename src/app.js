const express = require('express');
const roomRoutes = require('./routes/room.routes');

const app = express();
app.use(express.json());

app.use('/room', roomRoutes);  

app.listen(5000, () => console.log('Server running on port 5000'));
