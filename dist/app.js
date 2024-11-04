"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const body_parser_1 = __importDefault(require("body-parser"));
const room_routes_1 = __importDefault(require("./routes/room.routes"));
const customer_routes_1 = __importDefault(require("./routes/customer.routes")); // Example: if you have customer routes
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;
// Middleware
app.use(body_parser_1.default.json()); // Parse JSON requests
app.use(body_parser_1.default.urlencoded({ extended: true })); // Parse URL-encoded requests
// Routes
app.use('/room', room_routes_1.default); // Maps /room routes to roomRoutes
app.use('/customer', customer_routes_1.default); // Maps /customer routes to customerRoutes
// MongoDB Connection
mongoose_1.default.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/mydatabse', {})
    .then(() => console.log('Connected to MongoDB'))
    .catch((error) => console.error('Could not connect to MongoDB:', error));
// Start Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
exports.default = app;
