const {body, validationResult} = require('express-validator')
const usuario=require('../models/usuariosMongo');

const productos=require('../models/productoMongo');
const catalogos = require('../models/productoMongo');
const nodemailer = require('nodemailer');





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

//validar inicio de sesion
exports.validacionesn=[
  body('correo').isEmail()
  .withMessage('correo invalido'),
  body('contraseña')
  .isLength({min:5})
  .withMessage('contraseña invalida'),

async (req , res)=>{

 const errors = validationResult(req)

    if (!errors.isEmpty()) {
        console.log(req.body)
        const valores = req.body
        const validaciones = errors.array()
        res.render('ingresar', {validaciones:validaciones, valores: valores})
    }

      
    const correo=req.body.correo;
    const contraseña= req.body.contraseña;

  const usuarioingresa =await  usuario.findOne({correo:correo});
console.log(usuarioingresa);
    if(usuarioingresa.contraseña==contraseña){
     // res.status(200).send('perfil');
      res.render('perfil')
    }
  }
]

//ingresar

/*exports.ingresar1= async(req , res)=>{
  try {
   const correo=req.body.correo;
    const contraseña= req.body.contraseña;

  const usuarioingresa =await  usuario.findOne({correo:correo});
console.log(usuarioingresa);
    if(usuarioingresa.contraseña==contraseña){
      res.status(200).send('perfil');
      //res.render('perfil')
    }else{


    }

  } catch (error) {
    
  }

}
*/

//registrar cliente

exports.registrar=(req , res)=>{

    res.render('registrar')};


    exports.registrar1 = (req, res) => {

try {
  const clientes = new usuario({
    _id: req.body.cedula,
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    contraseña: req.body.contraseña,
    correo: req.body.correo,
    direccion: req.body.direccion,
    ciudad: req.body.ciudad,
    terminos: req.body.terminos,
  });
  
  clientes.save();
  console.log(clientes);
  res.render('registrar');
  
} catch (errors) {
  console.log(errors);
  res.render('registrar');
}

     
    };

//registrar vendedor
exports.registrarV=(req,res)=>{
    
  res.render('registrarVendedor')
}
exports.registrarV1=(req,res)=>{

}


//producto
exports.agregarProdcutos=(req,res)=>{

  res.render('productosn')
}

exports.registrarProducto=(req,res)=>{

  const rproductos1 = new productos ({ 
  _id:req.body.referencia,
  nombreProducto:req.body.nompreProcuto,
  descripcion:req.body.descripcion,
  precio:req.body.precio,
  stok:req.body.stock,
  //img:req.body.
  habilitado:req.body.activo

});

    rproductos1.save();
    console.log(rproductos1);
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


      //carro de compras

      exports.carro=async(req , res)=>{


    const productos1=await catalogos.find();
    res.render('carroDeCompras',{
      "carro": productos1
    });
    res.render('carroDeCompras')
    
        
      };
      /*exports.agregar=(req,res)=>{
        const agregar= document.getElementById('campo');

      }*/


exports.correon=(req,res)=>{

  const usuario =req.body.usuario
  const correo =req.body.correo
  const contenido =req.body.contenido
console.log();

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'shernandez998@misena.edu.co',
    pass: 'zxxlaarsgxqfkqvu'
  }
});

var mailOptions = {
  //quien lo envia
  from: correo,
  //quien lo recibe
  to: 'shernandez998@misena.edu.co',
  subject: usuario,
  text: contenido
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
}
