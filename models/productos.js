const { default: mongoose } = require('mongoose')

const nuevoUuario = require('../config/conectionMongoose')
 

const SchemaProductos = new mongoose.Schema({
_id:{
    type: Object,
    required:true,
    
    },
    referencia:{
        type:String,
    },
    nombre:{
        type:String
    },
    descripcion:{
        type:String
    },
    stock:{
        type:Number
    },
    precio:{
        type:String
    },
    habilitado:{
        type:Boolean
    }


});


const productos = mongoose.model('productos', SchemaProductos);
module.exports=productos;