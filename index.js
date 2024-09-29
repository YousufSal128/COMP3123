const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON body for POST requests
app.use(express.json());

// Define a route for the root URL
app.get('/', (req, res) => {
    res.send('Welcome to the Express Server!');
});

// GET request to /hello
app.get('/hello', (req, res) => {
    res.send('Hello Express JS');
});

// GET request to /user with query parameters
app.get('/user', (req, res) => {
    const firstname = req.query.firstname || 'Yousuf';
    const lastname = req.query.lastname || 'Salihi';
    res.json({ firstname, lastname });
});

// POST request to /user with path parameters
app.post('/user/:firstname/:lastname', (req, res) => {
    const firstname = req.params.firstname;
    const lastname = req.params.lastname;
    res.json({ firstname, lastname });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
