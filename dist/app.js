"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const axios_1 = __importDefault(require("axios"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
// Middleware to log each request
app.use((req, res, next) => {
    console.log(`${req.method} request for '${req.url}'`);
    next(); // Pass control to the next middleware or route handler
});
// Middleware to parse JSON data from incoming requests
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
// Default route for the home page
app.get('/', (request, response) => {
    response.send('Hello, World!');
});
// New route to get user data
app.get('/api/users', (request, response) => {
    response.json({
        users: [
            { id: 1, name: 'Odetoyinbo Oluwapelumi', email: 'odetoyinbopelumi42@gmail.com', Phonenumber: '08101435936' },
            { id: 2, name: 'Victoria Olabiyi', email: 'Vickygold112@gmail.com', number: '08136475159' }
        ]
    });
});
// Route to handle POST request for adding a new user
app.post('/api/users', (request, response) => {
    const { name } = request.body;
    if (!name) {
        response.status(400).json({ error: 'Name is required' });
    }
    else {
        response.status(201).json({ message: `User ${name} created successfully!` });
    }
});
app.get('/api/random-user', (request, respond) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axios_1.default.get('https://randomuser.me/api/');
        const user = response.data.results[0]; // TypeScript now knows the structure
        respond.json({
            name: `${user.name.first} ${user.name.last}`,
            email: user.email,
            country: user.location.country
        });
    }
    catch (error) {
        console.error('Error fetching user data:', error);
        respond.status(500).json({ error: 'Failed to fetch user data' });
    }
}));
// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
