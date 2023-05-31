const productos=require('../models/productoMongo');
const vendedor=require('../models/vendedorMongo');


exports.perfilAdmin=(req , res)=>{
    res.render('administrador');
}

//tablas

exports.tablaA= async(req,res)=>{
    const producto =await vendedor.find();
    res.render('tablaAdmin',{
      "productos": producto
    });
  }