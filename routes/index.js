var express = require('express');
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

router.get('/buscar', async (req, res) => {
    /*llamo a la funcion getPrendas*/
    const prendas = await api.getPrenda();
    res.render('pages/buscar', {prendas});
});


router.get('/filtrar',async (req, res) => {
    // Conseguir lo que el usuario tipeó en el campo "pilcha"
    // const pilcha = req.query.titulo;
    const {pilcha} = req.query;
  
    // Enviar pilcha a la llamada de la API
  
    const results = await api.searchByFiltro(pilcha);
  
    res.send(results);
  });


module.exports = router;
