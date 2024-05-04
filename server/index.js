const express = require('express');
const app = express ();
const bodyParser = require('body-parser');
const Router = require('./src/routes/Auth');
const mongoose = require('mongoose');
const cors = require('cors');
const session = require('express-session');
const mongoDBSession = require('connect-mongodb-session')(session);

const port = 3000;
const dbUrl = 'mongodb://127.0.0.1:27017/ecommerce-website'

// establish database connection
mongoose.connect(dbUrl, {/** mongoose options */})
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('Error connecting to MongoDB:', err));

const store = new mongoDBSession({
    uri: dbUrl,
    collection: 'sessions'
})


// Enable CORS for all origins during development (not recommended for production)
app.use(cors());


// parse json from request
app.use(bodyParser.json()); 
app.use('/', Router.router);

// create a session
// app.use(session({
//     secret:'cookie-session-for-authentication',
//     resave: false,
//     // to not save the session at inializing the app
//     saveUninitialized: false,
//     store: store
// }))

app.listen( port, () => {
    console.log(`server is running on port ${port}`);
});