const config = require('./pkg/config');
const express = require('express');
const fileUpload = require('express-fileupload');
const jwt = require('express-jwt');
const handlers = require('./handlers/storage');

let cfgSecurity = config.get('security');
let cfgApp = config.get('app');

const api = express();

api.use(jwt({
    algorithms: cfgSecurity.algorithms,
    secret: cfgSecurity.secret
}));
api.use(fileUpload());

api.post('/storage', handlers.upload);
api.get('/storage', handlers.getFileList);
api.get('/storage/:filename', handlers.download);
api.delete('/storage/:filename', handlers.removeFile);

api.listen(cfgApp.port, err => {
    if(err) {
        return console.log(err);
    }
    console.log(`Server successfuly started on port ${cfgApp.port}`);
});