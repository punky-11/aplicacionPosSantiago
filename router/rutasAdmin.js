
const administrador = require('../controller/administrador');
const express = require('express');
const crudUsuario = require("../controller/usuario");
const router =express.Router();

//table
router.get('/tabla',administrador.tablaA);
//agregar vendedor
router.post('/agregar',administrador.registrarVendedor);

//admin
router.get('/administrador',administrador.perfilAdmin);

router.get('/descargar',administrador.descargarExcel);
//productos
router.get('/productos',administrador.verProductos);
router.post('/productos1',administrador.registrarProducto);
//grafica
router.get('/grafico',administrador.graficaProductos);

//eliminar vendedor
router.post("/borrar/:id", administrador.borrar);
//editar vendedor
router.post("/editar/:id", administrador.editar);

module.exports=router;