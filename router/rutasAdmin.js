
const administrador = require('../controller/administrador');
const express = require('express');
const router =express.Router();

//table
router.get('/tabla',administrador.tablaA)

//admin
router.get('/administrador',administrador.perfilAdmin);


module.exports=router;