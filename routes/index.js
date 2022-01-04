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

module.exports = router;
