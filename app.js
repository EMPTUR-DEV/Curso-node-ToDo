const argv = require('./config/yargs').argv;

const porHacer = require('./por-hacer/por-hacer');

const color = require('colors');


let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion)
        console.log('Crear por hacer');
        break;
    case 'listar':

        let listado = porHacer.getListado(argv.c);

        for (let tarea of listado) {
            console.log('=======Por Hacer======'.green);
            console.log(tarea.descripcion);
            console.log('Estado', tarea.completado);
            console.log('======================'.green);
        }

        //console.log('Muestra las tareas por hacer');
        break;
    case 'actualizar':

        let completado = porHacer.actualizar(argv.d, argv.c);

        console.log(`Tarea ${argv.d} actualizada: ${completado}`);

        break;
    case 'borrar':

        let borrado = porHacer.borrar(argv.d);

        console.log(`Tarea: ${argv.d} Borrado: ${borrado}`);

        break;
    default:

        console.log('Comando no identificado');
        break;

}