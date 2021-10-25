const mongoose = require('mongoose');

let username = 'dev';
let password = '';
let host = '';
let dbname = 'semosdb';

// connection string
let dsn = `mongodb+srv://${username}:${password}@${host}/${dbname}?retryWrites=true&w=majority`;

mongoose.connect(
    dsn,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    err => {
        if (err) {
            return console.log('Could not connect to DB:', err);
        }
        console.log('Successfully connected to db');
    }
);