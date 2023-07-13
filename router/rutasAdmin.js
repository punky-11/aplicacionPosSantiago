
const administrador = require('../controller/administrador');
const express = require('express');
const crudUsuario = require("../controller/usuario");
const router =express.Router();
//perfil admin
router.get('/',administrador.perfilAdmin);
//table
router.get('/tablavendedor',administrador.tablaA);
//agregar vendedor
router.post('/agregar',administrador.registrarVendedor);

//admin
router.get('/administrador',administrador.perfilAdmin);
//ver administradores
router.get('/verAdmin',administrador.verVendedores);
//crud admin

//registrar admin
router.post('/registrarAdmin',administrador.registrarAdmin);
//editar admin
router.post('/editarAdmin/:id',administrador.editarAdmin);
//eliminar admin
router.post('/administrador/:id',administrador.eliminarAdmin);
//router.post('/editarAdmin/:id',administrador.editarAdmin);
router.get('/descargar',administrador.descargarExcel);
//productos
router.get('/productos',administrador.verProductos);
router.post('/productos1',administrador.registrarProducto);
//crud productos
router.post('/actualizarProducto/:id',administrador.actualizarProducto);
router.post('/eliminarPorducto/:id',administrador.eliminarPorducto);
//grafica
router.get('/grafico',administrador.graficaProductos);

//eliminar vendedor
router.post("/borrar/:id", administrador.borrar);
//editar vendedor
router.post("/editar/:id", administrador.editar);

module.exports=router;