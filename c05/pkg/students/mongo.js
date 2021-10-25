const mongoose = require('mongoose');

const Student = mongoose.model(
    'students',
    {
        first_name: String,
        last_name: String,
        gpa: Number
    },
    'students'
);

const create = async (studentData) => {
    let s = new Student(studentData);
    return await s.save();
};

const getAll = async () => {
    let data = await Student.find({});
    return data;
};

const getOne = async (id) => {
    let data = await Student.find({_id: id});
    return data;
};

const update = async (id, studentData) => {
    return await Student.updateOne({_id: id}, studentData);
};

const partialUpdate = async (id, studentData) => {
    return await Student.updateOne({ _id: id }, studentData);
};

const remove = async (id) => {
    return await Student.deleteOne({_id: id});
};

module.exports = {
    create,
    getAll,
    getOne,
    update,
    partialUpdate,
    remove
};