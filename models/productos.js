const { default: mongoose } = require('mongoose')

const nuevoUuario = require('../config/conectionMongoose')
 

const SchemaProductos = new mongoose.Schema({
_id:{
    type: Object,
   // required:true,
    
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
        type:String
    },
    precio:{
        type:Number
    },
    habilitado:{
        type:Boolean
    }


});


const productos = mongoose.model('productos', SchemaProductos);
module.exports=productos;