require('./pkg/db/index');

const express = require('express');
const students = require('./handlers/students');
const books = require('./handlers/books');


const api = express();

api.use(express.json());

api.post('/students', students.create);
api.get('/students', students.getAll);
api.get('/students/:id', students.getOne);
api.put('/students/:id', students.update);
api.patch('/students/:id', students.partialUpdate);
api.delete('/students/:id', students.remove);

api.post('/books', books.create);
api.get('/books', books.getAll);
api.get('/books/:id', books.getOne);
api.put('/books/:id', books.partialUpdate);
api.delete('/books/:id', books.remove);

api.listen(10000, err => {
    if (err) {
        return console.log(err);
    }
    console.log('Services started on port 10000');
});