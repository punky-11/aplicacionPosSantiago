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

//registrar vendedor

exports.registrarVendedor=(req,res)=>{

  const vendedor1 = new vendedor ({ 
  
  nombre:req.body.nombre,
  apellido:req.body.apellido,
  contraseña:req.body.contraseña,
  _id:req.body.correo

});

vendedor1.save();
    console.log(vendedor1);
    res.render('/api/registrar');
}
