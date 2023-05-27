const crudUsuario = require('../controller/CRUD');
const express = require('express');
const router =express.Router();

//trar mascotas
//router.get('/mascotas',crudUsuario.mascotas);
//perfil
router.get('/perfil',crudUsuario.perfil);
//pagina principal
router.get('/',crudUsuario.inicio);
//formulario de ingresar
router.get('/ingresar',crudUsuario.ingresar);
router.post('/ingresar1',crudUsuario.ingresar1);


//abrir el formulario
router.get('/registrar',crudUsuario.registrar);
//agrega
router.post('/registrar1',crudUsuario.registrarNueva);
//elimina
//router.post("/borrar/:id", crudUsuario.borrar);
//update
//router.post('/update/:id', crudUsuario.Update);



module.exports=router;