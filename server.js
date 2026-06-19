require("dotenv").config()
const express = require('express');
const path = require('path')
const app = express();
const PORT = process.env.PORT;

// Middleware to parse incoming JSON data
app.use(express.json());

// Middleware to serve static files
app.use(express.static(path.join(__dirname, 'public')));

//Middleware to log user request
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url} - ${new Date()}`)
    next();
})

//Serve the main page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// get route for my week 2 api
app.get('/', (req, res) => {
    res.send('My Week 2 API');
});

// post route  for user data
app.post('/user', (req, res) => {
    const userData = req.body
    if (!userData) {
        return res.status(400).json({ 
            error: 'Name and email are required' 
        });
    }
    res.json({message: `Hello ${userData.name}`})
})
//post route for user id
app.get('/user/:id', (req, res) => {
    const id = req.params.id
    res.send(`User ${id} profile`)
})


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
