const weather = require('../pkg/weather');

const getForCity = async (req, res) => {
    console.time('fetch');
    let data = await weather.city(req.params.city);
    console.timeEnd('fetch');
    res.status(200).send(data);
};

module.exports = {
    getForCity
};