
const express = require('express');
const usuario=require('../models/usuariosMongo');
const productos=require('../models/productoMongo');

//perfil
exports.perfil=(req , res)=>{
  res.render('perfil');
};

//pagina principal
exports.inicio=(req , res)=>{
  res.render('index')
};

//inicio de sesion
exports.ingresar=(req , res)=>{
  res.render('ingresar')
}
exports.ingresar1= async(req , res)=>{
  try {
   const correo=req.body.correo;
    const contraseña= req.body.contraseña;

  const usuarioingresa =await  usuario.findOne({correo:correo});

    if(usuarioingresa.contraseña==contraseña){
      res.status(200).render('perfil')
      //res.render('perfil')
    }else{

      var alerta = document.getElementById('alerta');

      alert("error")
     alerta.innerHTMLL=
      `<div class="alert alert-warning alert-dismissible fade show" role="alert">
      <strong>error</strong> contraseña o correo incorrecto
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>`
  //res.render('ingresar')
    }

  } catch (error) {
    
  }

}

//registrar cliente

exports.registrar=(req , res)=>{

    res.render('registrar')};



exports.registrarNueva= (req, res)=>{



    try {
      const clientes = new usuario ({ 
        _id:req.body.cedula,
        nombre:req.body.nombre,
        apellido:req.body.apellido,
        contraseña:req.body.contraseña,
        correo:req.body.correo,
        direccion:req.body.direccion,
        ciudad:req.body.ciudad,
        });
        clientes.save();

    } catch (n) {
      

    res.redirect('/api/registrar');

    }

    res.redirect('/api/registrar');
};


//producto
exports.agregarProdcutos=(req,res)=>{

  res.render('productosn')
}

exports.registrarProducto=(req,res)=>{
  const rproductos = new productos ({ 
  _id:req.body.referencia,
  nombreProducto:req.body.nompreProcuto,
  descripcion:req.body.descripcion,
  precio:req.body.precio,
  stok:req.body.stock,
  //img:req.body.
  habilitado:req.body.activo
});
    rproductos.save();
    console.log(rproductos);
    res.render('/api/productos');
}


//eliminar



/*exports.borrar =  async(req, res) => {
    
    await mascota.findByIdAndDelete(id = req.params.id);
    
    res.redirect("/api/v1/mascotas")
} 
//update



    exports.Update = async (req, res) => {
        
        const n = await mascota.findByIdAndUpdate(
          id = req.params.id,
          {
            nombre: req.body.mNombre,
            edad: req.body.mRaza,
            raza: req.body.mEdad
          }
        );
        console.log(req.params)
        console.log(n);
        res.redirect("/api/v1/mascotas");
      };*/