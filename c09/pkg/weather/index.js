const fetch = require('node-fetch');
const API_KEY = '';
const cache = {};

// cache
// {
//     'skopje': {
//         ts: 9874356234087,
//         data: {...}
//     },
//     'bitola': {
//         ts: 7539487593274,
//         data: {... }
//     },
// }

const city = async (cityLocation) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityLocation}&appid=${API_KEY}`;

    if (cache[cityLocation] && (cache[cityLocation].ts + 10000) > new Date().getTime()) {
        return cache[cityLocation].data;
    }

    try {
        let res = await fetch(url);
        let data = await res.json();
        cache[cityLocation] = {
            ts: new Date().getTime(),
            data
        };
        return data;
    } catch(err) {
        throw new Error(err + 'could not fetch weather data');
    }
};

module.exports = {
    city
};