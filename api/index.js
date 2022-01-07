const req = require('express/lib/request');
const res = require('express/lib/response');
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
    
    // const bandera = async (email) => {
    //     const devolucion = await bandera(email);
    //     return devolucion;
    // }

    // usuarios.forEach(usuarios => {
    //     if(usuarios.email === email){
    //         bandera = 1;
    //     }
    // });
    if(fetch(bandera(email)).then(res) === 0){
        const nuevoUsuario = await db.usuarios.create({
            nombre: nombre,
            email: email
        });
        return nuevoUsuario;
    }
    else{
        var nuevoUsuario = "el usuario ya existe";
        console.log('MENSAJE: ', nuevoUsuario);
        // res.send(nuevoUsuario);
        return nuevoUsuario;
        
    }      
};   
    // var bandera = async (email) => {

    // } 
    // //  results.forEach(results=> { 
        
    // //       <a href="<%= results.idPrenda %>" class="prendas">
    // //         <img src="<%= results.imagen %>" alt="" class="imagen">
    // //         <h2 class="precio"> $ <%= results.precio %> </h2>
          
        
    // //    })

    // const nuevoUsuario = await db.usuarios.create({
    //     nombre: nombre,
    //     email: email
    // });
    // return nuevoUsuario;


    const bandera = async(email) => {
        // llamo a la DB
        console.log("me cago en la concha de tu hermana");
        let bandera = 0;
        const usuarios = await db.usuarios.findAll().then(result => {
            console.log("entro a bandera");
            return result;
        });
        console.log('ESTO ES USUARIOS: ', usuarios);
        usuarios.forEach(usuarios => {
            console.log("entro al forEach");
            if(usuarios.email === email){

                bandera = 1;
            }
        });        
    return bandera;
    }



// const getUsuarios = async(email) => {
//     // llamo a la DB
//     const usuarios = await db.usuarios.findAll().then(result => {
//         return result;
//     });
// return usuarios;
// }






module.exports = {    
    searchByFiltro,
    addUser,
    bandera
};