'use strict'
const {body, validationResult} = require('express-validator')
const usuario=require('../models/usuariosMongo');
const administador=require('../models/administradorMongo');
//const productos=require('../models/productos');
const catalogos = require('../models/productos');
const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');
//const vendedor = require("../models/vendedorMongo");





//perfil
exports.perfil= async (req , res)=>{

  const claveSecreta = process.env.CLAVE_SECRETA;
  const token = req.query.token;
  const datosUsuario = JSON.parse(req.query.datos || '{}');
  // Verifica el token JWT para autenticar al usuario
  try {
    const decoded = jwt.verify(token, claveSecreta);
    
    // Aquí puedes realizar cualquier lógica adicional basada en el token decodificado
    
    res.render('perfil', { usuario: datosUsuario });
  } catch (error) {
    res.status(401).send('Token inválido');
  }

  /*const token = req.query.token;
  const datosUsuario = JSON.parse(req.query.datos || '{}');
  try {
    const decoded = jwt.verify(token,claveSecreta);
    const idUsuario = decoded.id;

    // Obtén los datos del usuario desde la base de datos utilizando el modelo Usuario
    const usuario1 = await usuario.findOne({ _id: idUsuario });

    if (!usuario1) {
      return res.status(401).send('Usuario no encontrado');
    }

    res.redirect('perfil', { usuario: datosUsuario });
  } catch (error) {
    res.status(401).send('Token inválido');
  }*/

  /*const id = req.params.id;
  console.log(id);*/


  /*try {
    const usuarios =  usuario.findById(id).lean();
    //const usuarioJson = JSON.parse(JSON.stringify(usuarios));
    if (usuarios) {
      //console.log(usuarioJson)
      console.log(usuarios);
      res.send('render', {usuario: usuarios } );
    } else {
      res.send('error', { message: 'Usuario no encontrado' });
    }
  
  } catch (error) {
    console.log(error);
    
  }
*/

  //const usuarios =await usuario.findOne({_id:id});
  //const usuarios = await usuario.find();
  //const usuario = await usuario;
//console.log(usuarios);
//res.render('perfil',{
 // "usuarios": usuarios})
//console.log(usuarios[0].nombre);
 //nombre=usuarios.nombre;
 //console.log(nombre);
  /*apellido=usuario.apellido;
  correo=usuario.correo;
  direccion=usuario.direccion;
  ciudad=usuario.ciudad;*/

  //res.render('perfil',{usuario:usuario});
  /**const clientes = new usuario({
    _id: req.body.cedula,
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    contraseña: req.body.contraseña,
    correo: req.body.correo,
    direccion: req.body.direccion,
    ciudad: req.body.ciudad,
    terminos: req.body.terminos, */

  //res.render('perfil',{_id:id} );
};

//pagina principal
exports.inicio=(req , res)=>{
  res.render('index');
};



//inicio de sesion
exports.ingresar=(req , res)=>{
  res.render('ingresar');
}

//validar inicio de sesion

exports.validacionesn = [
  body('_id')
    .isLength({ min: 1 })
    .withMessage('cedula inválido'),
  body('contraseña')
    .isLength({ min: 5 })
    .withMessage('contraseña inválida'),

  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      console.log(req.body);
      const valores = req.body;
      const validaciones = errors.array();
      return res.render('ingresar', { validaciones: validaciones, valores: valores });
    }
    const claveSecreta = process.env.CLAVE_SECRETA;
    const id = req.body._id;
    const contraseña = req.body.contraseña;

    const usuarioingresa = await usuario.findOne({ _id: id });
    

    if (!usuarioingresa) {
      return res.status(401).send('Nombre de usuario inválido');
    }

    const rolUsuario = usuarioingresa.rol;
    const contraseñaUsuario = usuarioingresa.contraseña;

    if (contraseñaUsuario !== contraseña) {
      return res.status(401).send('Contraseña incorrecta');
    }
    const datosUsuario = {
      id: usuarioingresa._id,
      nombre: usuarioingresa.nombre,
      apellido: usuarioingresa.apellido,
      correo: usuarioingresa.correo,
      direccion: usuarioingresa.direccion,
      ciudad: usuarioingresa.ciudad,


      
    };

    const token = jwt.sign({ id: usuarioingresa._id, role: rolUsuario }, claveSecreta);
    res.redirect(`/api/perfil/${id}?token=${token}&datos=${JSON.stringify(datosUsuario)}`);
    console.log(usuarioingresa);
    console.log(token);
  }
];

//ingres funciona la validacion
/*exports.validacionesn=[
  body('_id') 
  .isLength({min:1})
  .withMessage('_id invalido')
  ,
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

     
    const id=req.body._id;
    const contraseña= req.body.contraseña;

  const usuarioingresa =await  usuario.findOne({_id:id});
console.log(usuarioingresa);
    if(usuarioingresa.contraseña==contraseña && usuarioingresa.id==id){
      console.log(id);
     // res.status(200).send('perfil');
      //res.render('perfil/${_id}' )
      res.redirect(`perfil/:${id}`)
    }
    
  }
]*/


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

//enviar correo
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

//ver productos
exports.productos=async (req,res)=>{

const  productos =await catalogos.find();

    res.render('productos',{
        "productos":productos
    });

}