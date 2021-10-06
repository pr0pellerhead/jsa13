// console.log('Zdravo svetu!');
// console.dir('Zdravo svetu!');
// console.error('CRASH & BURN!');
// let table = [
//     {fname: 'Bojan', lname: 'Gavrovski'},
//     {fname: 'Pero', lname: 'Perovski'}
// ];
// console.table(table);


// setTimeout(() => {
//     console.log('prv');
// }, 2000);

// const myTimeout = () => {};

// const myTimeout = () => {
//     return new Promise();
// };

// const myTimeout = () => {
//     return new Promise(() => {
//         // my logic
//     });
// };

// const myTimeout = () => {
//     return new Promise(() => {
//         setTimeout(() => {
//             console.log('prv');
//         }, 2000);
//     });
// };

const myTimeout = (timeout) => {
    return new Promise((success, fail) => {
        setTimeout(() => {
            console.log('prv');
            success(); // the function placed in the .then(...)
        }, timeout);
    });
};

// myTimeout(2000)
//     .then(() => {
//         console.log('vtor');
//         return myTimeout(1000);
//     })
//     .then(() => {
//         console.log('tret');
//     })
//     .catch(err => {
//         console.error(err);
//     });

const main = async () => {
    try {
        await myTimeout(2000); // wait until done then go to next line
        console.log('vtor');
        await myTimeout(1000); // wait until done then go to next line
        console.log('tret');
    } catch(err) {
        console.error(err);
    }
};

// main();

// map
// reduce
// sort
// forEach
// filter

let niza = [1, 2, 3, 4, 5, 6, 7];

let n2 = niza.map((v, i) => {
    if(v % 2) {
        return v * 10;
    }
});

console.dir(n2);

let n3 = niza.reduce((acc, v) => {
    return acc + v;
});

console.log(n3);

let studenti = [
    {ime: Pero, prosek: 8},
    {ime: Janko, prosek: 9},
    {ime: Stanko, prosek: 6},
    {ime: Ivan, prosek: 10},
    {ime: Goran, prosek: 7}
];