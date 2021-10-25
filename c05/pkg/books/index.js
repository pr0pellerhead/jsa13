const fs = require('../fs');
const db = '../../books.json';

const create = async (bookData) => {
    let data = await fs.read(db);
    let id = 1;
    if (data.length !== 0) {
        id = data[data.length - 1].id + 1;
    }
    let student = {
        id,
        book_name: bookData.book_name,
        year_published: bookData.year_published,
        genre: bookData.genre,
        price: bookData.price
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

const update = async (id, bookData) => {
    let data = await fs.read(db);
    data = data.map(s => {
        if (s.id === Number(id)) {
            s.book_name = bookData.book_name;
            s.year_published = bookData.year_published;
            s.genre = bookData.genre;
            s.price = bookData.price;
        }
        return s;
    });
    await fs.write(db, data);
};

const partialUpdate = async (id, bookData) => {
    let data = await fs.read(db);
    data = data.map(s => {
        if (s.id === Number(id)) {
            s.book_name = bookData.book_name ? bookData.book_name : s.book_name;
            s.year_published = bookData.year_published ? bookData.year_published : s.year_published;
            s.genre = bookData.genre ? bookData.genre : s.genre;
            s.price = bookData.price ? bookData.price : s.price;
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