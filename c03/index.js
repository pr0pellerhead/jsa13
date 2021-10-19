// REST = representational state transfer

// GET, PUT, PATCH, DELETE, POST

// students resource

// GET /students - give me all students
// GET /students/123 - give me the student with ID 123
// POST /students - add new student 
// PUT /students/123 - update the student with ID 123
// PATCH /students/123 - partial update of the student with ID 123

// ???

// get the grades of the student with ID 123 ?
// GET /students/123/grades

// student
// {
//     fist_name: 'Bojan',
//     last_name: 'Gavrovski',
//     gpa: 6.1,
//     grades: [
//         {subject: 'Math', grade: 7},
//         {subject: 'English', grade: 9}
//     ]
// }

// communication language is always json

// server always returns a status code
// 2**, 3**, 4**, 5**

// CRUD - Create, Read, Update, Delete

const express = require('express');

const api = express();

api.use(express.json());

let students = [];

api.get('/students', (req, res) => {
    res.status(200).send(students);
});

api.post('/students', (req, res) => {
    students = [
        ...students,
        req.body
    ];
    res.status(201).send(req.body);
});

api.get('/students/:id', (req, res) => {
    if (!students[req.params.id]) {
        return res.status(404).send('Not Found');
    }
    res.status(200).send(students[req.params.id]);
});

api.put('/students/:id', (req, res) => {res.send('OK')});
api.patch('/students/:id', (req, res) => {res.send('OK')});

api.delete('/students/:id', (req, res) => {
    if (!students[req.params.id]) {
        return res.status(404).send('Not Found');
    }
    students = students.filter((s, i) => i != req.params.id);
    res.status(204).send();
});

api.listen(10000, err => {
    if(err) {
        return console.log(err);
    }
    return console.log('Server successfully started on port 10000');
});‸