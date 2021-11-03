require('./pkg/db');
const express = require('express');
const jwt = require('express-jwt');
const handlers = require('./handlers/auth')

const api = express();

api.use(express.json());
api.use(jwt({
        secret: 'secretpassword',
        algorithms: ['HS256']
    }).unless({ // you don't need jwt for these routes
        path: [
            '/auth/login',
            '/auth/create-account',
        ]}
    )
);

api.post('/auth/login', handlers.login);
api.get('/auth/validate', handlers.validate);
api.get('/auth/renew-jwt', handlers.renew);
api.post('/auth/create-account', handlers.createAccount);
api.post('/auth/forot-password', handlers.forgotPassword);
api.post('/auth/reset-password', handlers.resetPassword);

api.listen(10001, err => {
    if (err) {
        return console.log('Could not start server', err);
    }
    console.log('Server successfully started on port 10000');
})