
const { default: mongoose } = require('mongoose')

const nuevoUuario = require('../config/conectionMongoose')
 

const SchemaUsuario = new mongoose.Schema({
    //di
    _id:{
    type: Number,
    required:true,
    unique:true
    },

    nombre:{
        default:"sin nombre",
        type:String,
        required:false,
       
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
    },
    direccion:{
        default:"nn",
        type:String,
        //required:false,
    },
    ciudad:{
        default:"nn",
        type:String,
        //required:false,
    },


 });


const clientes = mongoose.model('clientes', SchemaUsuario);

module.exports=clientes;


