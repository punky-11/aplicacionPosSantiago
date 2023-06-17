const crudUsuario = require('../controller/usuario');
const express = require('express');
const router =express.Router();

//pagina principal
router.get('/',crudUsuario.inicio);
//perfil
router.get('/perfil/:id',crudUsuario.perfil);
//formulario de ingresar
router.get('/ingresar',crudUsuario.ingresar);
//router.post('/ingresarCliente',crudUsuario.ingresar1);
//validar inicio de sesion
router.post('/validar',crudUsuario.validacionesn);
//abrir el formulario
router.get('/registrar',crudUsuario.registrar);
//agregaClientes
router.post('/registrar1',crudUsuario.registrar1);
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
//router.get('/tabla',administrador.tablaA)

//admin
//router.get('/administrador1',administrador.perfilAdmin);

//carro
router.get('/micarro',crudUsuario.carro);
//contaco con nosotros
router.post('/contacto',crudUsuario.correon);
module.exports=router;