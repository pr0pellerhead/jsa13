const { Validator } = require('node-input-validator');

const ArticleCreate = {
    title: 'required',
    content: 'required',
    publish_date: 'required'
};

const validate = async (data) => {
    let v = new Validator(data, ArticleCreate);
    let e = await v.check();
    if (!e) {
        throw v.errors
    }
};

module.exports = validate;