const fs = require('fs');
const utiles = require('../utiles/utiles-guardar.js');



let listadoPorHacer = [];

path = './db/data.json'


const cargarDB = () => {

    try {
        listadoPorHacer = require(`../${path}`);
    } catch (error) {
        listadoPorHacer = [];
    }
}

const getListado = (completado = 'todo') => {

    cargarDB();

    if (completado == 'todo') {
        return listadoPorHacer;
    }

    let lista = listadoPorHacer.filter(tarea => {
        return String(tarea.completado) == completado;
    })
    return lista;


}

const crear = (descripcion) => {

    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);


    guardar();

    return porHacer

}

const guardar = (lista = listadoPorHacer, directorio = path) => {
    utiles.guardarDB(lista, directorio)
        .then(mensaje => console.log(mensaje))
        .catch(err => console.log(err));
}

const obtenerIndiceDescripcion = (descripcion) => {
    cargarDB();

    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion)

    return index;
}

const actualizar = (descripcion, completado = true) => {

    let index = obtenerIndiceDescripcion(descripcion);

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;

        guardar();

        return true;
    } else {
        return false;
    }
}

const borrar = (descripcion) => {

    cargarDB();

    listaNueva = listadoPorHacer.filter(tarea => {
        return tarea.descripcion !== descripcion
    })

    if (listadoPorHacer.length === listaNueva.length) {
        return false
    } else {

        listadoPorHacer = listaNueva;


        guardar();

        return true;
    }
}

//270200


module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}