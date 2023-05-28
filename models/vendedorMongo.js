const { default: mongoose } = require('mongoose')

const nuevoUuario = require('../config/conectionMongoose')
 

const SchemaVendedor = new mongoose.Schema({
    //di
    _id:{
    type: Number,
    required:true,
    unique:true
    },

    nombre:{
        default:"sin nombre",
        type:String,
        required:true,
       
    },   
    apellido:{
        type:String,
        default:"nn",
        required:true,

    },

    contraseña:{
        default:"nn",
        type:String,
        required:false,
    },
    correo:{
        default:"nn",
        type:String,
        required:true,
        unique:true
    }
 });


const vendedor = mongoose.model('vendedor', SchemaVendedor);

module.exports=vendedor;
