const opts_descripcion = {

    descripcion: {
        demand: true,
        alias: 'd'
    }
}

const opts_completado = {

    completado: {
        default: true,
        alias: 'c'
    }
}

const opt_listar = {

}


const argv = require('yargs')
    .command('crear', "Crea la tarea", opts_descripcion)
    .command('actualizar', "Actualiza la tarea", { opts_descripcion, opts_completado })
    .command("listar", "Lista de tareas", opt_listar)
    .command('borrar', 'Borra una tarea', opts_descripcion)
    .help()
    .argv;

module.exports = {
    argv
}