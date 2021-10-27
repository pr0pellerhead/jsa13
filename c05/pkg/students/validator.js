const { Validator } = require('node-input-validator');

const StudentSchemaInsert = {
    first_name: 'required|minLength:3',
    last_name: 'required|minLength:4',
    gpa: 'required|between:5,10'
};

const StudentSchemaUpdate = {
    first_name: 'minLength:3',
    last_name: 'minLength:4',
    gpa: 'between:5,10'
};

const validate = async (data, schema = 'INSERT') => {
    let sch;
    switch(schema) {
        case 'INSERT':
            sch = StudentSchemaInsert;
            break;
        case 'UPDATE':
            sch = StudentSchemaUpdate;
            break;
    }
    let v = new Validator(data, sch);
    let e = await v.check();
    if(!e) {
        throw v.errors
    }
};

module.exports = validate;