const fs = require('fs');
function writeToFile(dataToWrite, outputFileNameWithExtension) {
    try {
        fs.writeFile(`${outputFileNameWithExtension}`, JSON.stringify(dataToWrite), function (err) {
            if (err) throw err;
            console.log(`Data written to ${outputFileNameWithExtension}`);
        });
    } catch (error) {
        console.error(error);
    }
}

module.exports = {
    writeToFile
}