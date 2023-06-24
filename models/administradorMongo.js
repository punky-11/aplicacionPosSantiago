const { default: mongoose } = require('mongoose')

const nuevoUuario = require('../config/conectionMongoose')
 

const SchemaAdministrador = new mongoose.Schema({
    //di
    _id:{
    type: Object,
    //required:true,
    
    },

    nombreProducto:{
        default:"sin nombre",
        type:String,
        //required:true,
       
    },   
    descripcion:{
        type:String,
        default:"nn",
        //required:true,

    },

    precio:{
        default:"nn",
        type:Number,
        //required:false,
    },
    stok:{
        default:"nn",
        type:Number,
        //required:true,
        
    },
    img:{
        default:"nn",
        type:String,
        //required:false,
    },
    habilitado:{
        default:"nn",
        type:Boolean,
        //required:false,
    },


 });


const administrador = mongoose.model('catalogo', SchemaAdministrador);

module.exports=administrador;