const express = require('express');
const weather = require('./handlers/weather');

const api = express();

api.get('/weather/:city', weather.getForCity);

api.listen(10000, err => {
    if(err) {
        return console.log(err);
    }
    console.log('Server started on port 10000');
});