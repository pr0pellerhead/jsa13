const mongoose = require('mongoose');

const User = mongoose.model(
    'users',
    {
        first_name: String,
        last_name: String,
        email: String,
        password: String
    },
    'users'
);

const create = async (data) => {
    let u = new User(data);
    return await u.save();
};

const getByID = async (id) => {
    return await User.findById(id);
};

const getAll = async () => {
    return await User.find({});
};

const update = async (id, data) => {
    return await User.updateOne({_id: id}, data);
};

const remove = async (id) => {
    return await User.deleteOne({_id: id});
};

module.exports = {
    create,
    getByID,
    getAll,
    update,
    remove
};