const express = require('express');

//constructor (const app =)
const app = express();
const path=require('path');
const morgan=require('morgan');
//subir archivos
//const formidable = require('express-formidable');

//validaciones


//coasaq que no queremos subir 
const dotenv =require('dotenv');

dotenv.config();
//conexion para los archibos
//app.use(formidable);
//app.use(formidable.parse({ MediaKeySession:true }));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));

app.use(morgan('dev'));
app.use(express.json());
//es como que esta bien la peticion y hace no se envie basio lo de la base de datos
app.use(express.urlencoded({extended:false}));

//archivos estaticos de tailwind
app.use('/static',express.static('static'));

//PUERTO
const PORT= process.env.PORT ;


//ruta
const router = require('./router/enrutamiento','./router/rutasAdmin');
app.use('/api/',router);

const router2 = require('./router/rutasAdmin');
app.use('/admin/',router2);

//puesto
app.listen(PORT, ()=>{
    console.log('estoy en linea desde el puerto: '+ PORT);
});



