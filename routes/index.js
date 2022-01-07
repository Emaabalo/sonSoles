var express = require('express');
const res = require('express/lib/response');
var router = express.Router();

/*traigo todas las funciones*/
const api = require('../api');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/registro' ,  (req, res) => {
    res.render('pages/registro', { title: 'Cuenta' });
});

// router.get('/buscar', async (req, res) => {
//     /*llamo a la funcion getPrendas*/
//     const prendas = await api.getPrenda();
//     res.render('pages/buscar', {prendas});
// });


router.get('/buscar',async (req, res) => {
    // Conseguir lo que el usuario tipeó en el campo "pilcha"

    // const pilcha = req.query.pilcha; 
    const {pilcha} = req.query;
    console.log('ESTO HAY DENTRO DE PILCHA: ', pilcha);
    // Enviar pilcha a la llamada de la API
    const results = await api.searchByFiltro(pilcha);
    // res.render('/prendas', {results});
    console.log('ESTO HAY DENTRO DE RESULTS DESPUES DE SALIR DE LA API: ', results);

    // const prendas = await api.getPrenda();
    res.render('pages/buscar', {results});
    
  });

router.get('/registro', async (req, res) =>{
    const {nombre, email} = req.body;
    await api.addUser(nombre, email);
});

router.get('/nosotros',async(req,res) => {
    const nosotros = res.render('pages/nosotros');
    return nosotros;
});


module.exports = router;
