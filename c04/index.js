const express = require('express');
const handlers = require('./handlers');

const api = express();

api.use(express.json());

api.post('/students', handlers.create);
api.get('/students', handlers.getAll);
api.get('/students/:id', handlers.getOne);
api.put('/students/:id', handlers.update);
api.patch('/students/:id', handlers.partialUpdate);
api.delete('/students/:id', handlers.remove);

api.listen(10000, err => {
    if (err) {
        return console.log(err);
    }
    console.log('Services started on port 10000');
});