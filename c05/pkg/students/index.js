const fs = require('../fs');
const db = '../../students.json';

const create = async (studentData) => {
    let data = await fs.read(db);
    let id = 1;
    if (data.length !== 0) {
        id = data[data.length - 1].id + 1;
    }
    let student = {
        id,
        first_name: studentData.first_name,
        last_name: studentData.last_name,
        gpa: studentData.gpa
    };
    data = [...data, student];
    await fs.write(db, data);
    return student;
};

const getAll = async () => {
    let data = await fs.read(db);
    return data;
};

const getOne = async (id) => {
    let data = await fs.read(db);
    let student = data.filter(s => s.id === Number(id));
    if(student.length === 0) return null;
    return student[0];
};

const update = async (id, studentData) => {
    let data = await fs.read(db);
    data = data.map(s => {
        if (s.id === Number(id)) {
            s.first_name = studentData.first_name;
            s.last_name = studentData.last_name;
            s.gpa = studentData.gpa;
        }
        return s;
    });
    await fs.write(db, data);
};

const partialUpdate = async (id, studentData) => {
    let data = await fs.read(db);
    data = data.map(s => {
        if (s.id === Number(id)) {
            s.first_name = studentData.first_name ? studentData.first_name : s.first_name;
            s.last_name = studentData.last_name ? studentData.last_name : s.last_name;
            s.gpa = studentData.gpa ? studentData.gpa : s.gpa;
        }
        return s;
    });
    await fs.write(db, data);
};

const remove = async (id) => {
    let data = await fs.read(db);
    let prevLength = data.length;
    data = data.filter(s => s.id !== Number(id));
    if (data.length === prevLength) {
        return false;
    }
    await fs.write(db, data);
    return true;
};

module.exports = {
    create,
    getAll,
    getOne,
    update,
    partialUpdate,
    remove
};