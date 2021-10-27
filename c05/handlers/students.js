const students = require('../pkg/students/mongo');
const validate = require('../pkg/students/validator');

const create = async (req, res) => {
    try {
        await validate(req.body);
    } catch(err) {
        console.log(err);
        return res.status(400).send(err);
    }

    try {
        let s = await students.create(req.body);
        res.status(201).send(s);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
};

const getAll = async (req, res) => {
    try {
        let data = await students.getAll();
        res.status(200).send(data);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
};

const getOne = async (req, res) => {
    try {
        let s = await students.getOne(req.params.id);
        if (!s) {
            return res.status(404).send('Not found');
        }
        res.status(200).send(s);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
};

const update = async (req, res) => {
    try {
        await validate(req.body);
    } catch (err) {
        console.log(err);
        return res.status(400).send(err);
    }
    try {
        await students.update(req.params.id, req.body);
        res.status(204).send();
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
};

const partialUpdate = async (req, res) => {
    try {
        await validate(req.body, 'UPDATE');
    } catch (err) {
        console.log(err);
        return res.status(400).send(err);
    }
    try {
        await students.partialUpdate(req.params.id, req.body);
        res.status(204).send();
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
};

const remove = async (req, res) => {
    try {
        if(await students.remove(req.params.id)) {
            res.status(204).send();
        }
        return res.status(404).send('Not found');
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
};

module.exports = {
    create,
    getAll,
    getOne,
    update,
    partialUpdate,
    remove
};