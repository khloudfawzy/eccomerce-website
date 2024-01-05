// this file is only for establishing a connection with our DB
const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost:27017/ecommerce-website');
const dbConnection = () => mongoose.connect('mongodb://127.0.0.1:27017/ecommerce-website').catch(error => console.log(error));

module.exports = dbConnection;