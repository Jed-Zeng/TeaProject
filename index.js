// index.js
//
// Import the required libraries
const express = require('express');
const bodyParser = require('body-parser');

// Create an instance of express
const app = express();

// Use body-parser middleware
app.use(bodyParser.json());

// Define a simple route
app.get('/', (req, res) => {
    res.send('Hello, World!');
    });

    // Start the server
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
        });
