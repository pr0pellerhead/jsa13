// го отворате фајлот data.json
// ја читате содржината
// ја претворате во js object/array (JSON.parse(...))
// ги филтрирате сите оние објекти каде просекот е над 7.5
// новата низа со студентите со просек над 7.5 ја конвертирате во JSON text (JSON.stringify(...))
// конвертираните податоци ги запишувате во фајл со име filtered_data.json

const fs = require('fs');

const read = (fileName) => {
    return new Promise((success, fail) => {
        fs.readFile(fileName, (err, data) => {
            if(err) return fail(err);
            return success(data);
        });
    });
};

const write = (fileName, content) => {
    return new Promise((success, fail) => {
        fs.writeFile(fileName, content, err => {
            if(err) return fail(err);
            return success();
        });
    });
};

const main = async () => {
    try {
        let data = await read('data.json');
        let parsedData = JSON.parse(data); // 1
        // просек над 7.5
        let output = parsedData.filter(d => d.prosek > 7.5); // 2
        let outputString = JSON.stringify(output); // 3
        await write('filtered_data.json', outputString);
        // имиња што почнуваат на P(п)
        let pnames = parsedData.filter(d => d.ime.toLowerCase()[0] === 'p')
        let pnamesString = JSON.stringify(pnames);
        await write('pnames_data.json', pnamesString);
    } catch(err) {
        console.log(err);
    }
};

main();