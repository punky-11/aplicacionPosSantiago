
const administrador = require('../controller/administrador');
const express = require('express');
const router =express.Router();

//table
router.get('/tabla',administrador.tablaA);
//agregar vendedor
router.post('/agregar',administrador.registrarVendedor);

//admin
router.get('/administrador',administrador.perfilAdmin);

router.get('/descargar',administrador.descargarExcel);

//grafica
router.get('/grafico',administrador.graficaProductos);

module.exports=router;