const req = require('express/lib/request');
const { Op } = require('sequelize');
// Traer la db
const db = require('../models');


const searchByFiltro = async (pilcha) => {
    //op.substring toma una cadena y le agrega %
    const resultados = await db.ropa.findAll({
        where:{
            tipoPrenda:{
                [Op.substring]: pilcha
            }
        }
    }).then(result => {
        return result;
    });
    return resultados;
}

const addUser = async (nombre, email) => {
    const nuevoUsuario = await db.usuarios.create({
        nombre: nombre,
        email: email
    });
    return nuevoUsuario;
}

module.exports = {    
    searchByFiltro,
    addUser
};