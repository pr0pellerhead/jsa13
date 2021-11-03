const express = require('express');
const fileUpload = require('express-fileupload');
const jwt = require('express-jwt');
const handlers = require('./handlers/storage');

const api = express();

api.use(jwt({
    algorithms: ['HS256'],
    secret: 'secretpassword'
}));
api.use(fileUpload());

api.post('/storage', handlers.upload);
api.get('/storage/:filename', handlers.download);

api.listen(10002, err => {
    if(err) {
        return console.log(err);
    }
    console.log('Server successfuly started on port 10002');
});