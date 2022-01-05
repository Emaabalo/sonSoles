const req = require('express/lib/request');
const { Op } = require('sequelize');
// Traer la db
const db = require('../models');

// SELECT* FROM inventario //anda a la base de datos de san ssoles y traeme todos los libros
// creamos una funcion y la guardamos en una variable getbooks
// se hace de esta forma porque es mas facil exportarla
// la hacemos de esta forma porque la vamos a usar en otros archivos. Para ello hay que exportarla
const getPrenda = async() => {
    // llamo a la DB
    const prendas = await db.ropa.findAll().then(result => {
        return result;
    });
    return prendas;
    console.log('que onda???', prendas);
//la funcion devuelve la variable prenda que es un json
// La devolucion del findAll se guarda en prenda y eso se retorna con result
//findAll ejecuta un select en la base de datos. el then lo espera a que termine 
};

const searchByFiltro = async (pilcha) => {
    //op.substring toma una cadena y le agrega %
    console.log(pilcha);
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

module.exports = {
    getPrenda,
    searchByFiltro
};