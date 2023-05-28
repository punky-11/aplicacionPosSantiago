const crudUsuario = require('../controller/CRUD');
const express = require('express');
const router =express.Router();

//pagina principal
router.get('/',crudUsuario.inicio);
//perfil
router.get('/perfil',crudUsuario.perfil);
//formulario de ingresar
router.get('/ingresar',crudUsuario.ingresar);
router.post('/ingresar1',crudUsuario.ingresar1);
//abrir el formulario
router.get('/registrar',crudUsuario.registrar);
//agregaClientes
router.post('/registrar1',crudUsuario.registrarNueva);
//agregarProductos
router.get('/productos',crudUsuario.agregarProdcutos);
router.post('/productos1',crudUsuario.registrarProducto);
//agregar vendedor
router.get('/registrarVendedor',crudUsuario.registrarV)
//elimina
//router.post("/borrar/:id", crudUsuario.borrar);
//update
//router.post('/update/:id', crudUsuario.Update);

//table
router.get('/tabla',crudUsuario.tablaA)

module.exports=router;