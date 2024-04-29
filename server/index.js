const express = require('express');
const app = express ();
const bodyParser = require('body-parser');
const Router = require('./src/routes/Auth');
const mongoose = require('mongoose');
const cors = require('cors');

// establish database connection
mongoose.connect('mongodb://127.0.0.1:27017/ecommerce-website', { /* connection options */ })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('Error connecting to MongoDB:', err));

// Enable CORS for all origins during development (not recommended for production)
app.use(cors());


// parse json from request
app.use(bodyParser.json()); 
app.use('/', Router.router);

const port = 3000;
app.listen( port, () => {
    console.log(`server is running on port ${port}`);
});