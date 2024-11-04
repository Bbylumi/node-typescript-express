
import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import axios from 'axios';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to log each request
app.use((req, res, next) => {
    console.log(`${req.method} request for '${req.url}'`);
    next(); // Pass control to the next middleware or route handler
});

// Middleware to parse JSON data from incoming requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Default route for the home page
app.get('/', (request: Request, response: Response) => {
    response.send('Hello, World!');
});

// New route to get user data
app.get('/api/users', (request: Request, response:Response ) => {
    response.json({
        users: [
            { id: 1, name: 'Odetoyinbo Oluwapelumi', email: 'odetoyinbopelumi42@gmail.com', Phonenumber: '08101435936' },
            { id: 2, name: 'Victoria Olabiyi', email: 'Vickygold112@gmail.com', number: '08136475159'}
        ]
    });
});

// Route to handle POST request for adding a new user
app.post('/api/users', (request:Request, response: Response) => {
    const { name } = request.body;
    if (!name) {
        response.status(400).json({ error: 'Name is required' });
    }else{
        response.status(201).json({ message: `User ${name} created successfully!` });
    }
    
});

app.get('/api/random-user', async (request: Request, respond: Response) => {
    try {
      const response = await axios.get<RandomUserAPIResponse>('https://randomuser.me/api/');
      
      const user = response.data.results[0]; // TypeScript now knows the structure
  
      respond.json({
        name: `${user.name.first} ${user.name.last}`,
        email: user.email,
        country: user.location.country
      });
    } catch (error) {
      console.error('Error fetching user data:', error);
      respond.status(500).json({ error: 'Failed to fetch user data' });
    }
  });
  


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


interface RandomUser {
    name: {
      first: string;
      last: string;
    };
    email: string;
    location: {
      country: string;
    };
  }
  
  interface RandomUserAPIResponse {
    results: RandomUser[];
  }