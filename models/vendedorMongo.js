const { default: mongoose } = require('mongoose')

const nuevoUuario = require('../config/conectionMongoose')
 

const SchemaVendedor = new mongoose.Schema({
    //di


    correo:{
        default:"sin nombre",
        type:String,
        //required:true,
       
    },   
    nombre:{
        default:"sin nombre",
        type:String,
        //required:true,
       
    },   
    apellido:{
        type:String,
        default:"nn",
        //required:true,

    },

    contraseña:{
        default:"nn",
        type:String,
        //required:false,
    },

 });


const vendedor = mongoose.model('vendedor', SchemaVendedor);

module.exports=vendedor;
