const fs = require('fs');

const guardarDB = (data_save, path) => {

    return new Promise((resolve, reject) => {

        fs.access(path, (err) => {
            if (err) {
                reject('No existe el archivo');
            } else {

                let data = JSON.stringify(data_save);
                fs.writeFile(path, data, (err) => {
                    if (err)
                        reject('Hubo otro error')
                    else
                        resolve(`Archivo guardado en ${path}`)
                });
            }
        })

    });
}

module.exports = {
    guardarDB
}