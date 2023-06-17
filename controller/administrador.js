const productos=require('../models/productoMongo');
const vendedor=require('../models/vendedorMongo');
const productosInventario =require('../models/productos');
const xl = require('excel4node');
const path = require('path')
const fs = require('fs');

exports.perfilAdmin=(req , res)=>{
    res.render('administrador');
}

//tablas
//descragar un excel
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




exports.descargarExcel = async(req, res) => {
    //configuramos el excel4node

    //creamos un nuevo documento
    const wb = new xl.Workbook();
    //definimos el nombre con el cual se descargara el archivo 
    const nombreArchivo = 'TablaProductos';
    //se define el nombre 
    var ws = wb.addWorksheet(nombreArchivo);

    //definimos estilos
    const columnaEstilo = wb.createStyle({
        font: {
            name: 'Arial',
            color: '#000000',
            size: 12,
            bold: true,
        }
    });

    const contenidoEstilo = wb.createStyle({
        font: {
            name: 'Arial',
            color: '#565656',
            size: 11,
        }
    });

    //definimos el nombre de las columnas
    ws.cell(1, 1).string('correo').style(columnaEstilo);
    ws.cell(1, 2).string('nombre').style(columnaEstilo);
    ws.cell(1, 3).string('apellido').style(columnaEstilo);
    ws.cell(1, 4).string('contraseña').style(columnaEstilo);

    //llamamos a la base de datos
    const listaVendedor = await vendedor.find()

    // definimos un contador que empiece en 2 
    let fila = 2;

    //agregamos el contenido de la base de datos con un for o un forEach para llamar todos los datos 
    
    listaVendedor.forEach(datoVendedor => {
    ws.cell(fila, 1).string(datoVendedor._id).style(contenidoEstilo);
    ws.cell(fila, 2).string(datoVendedor.nombre).style(contenidoEstilo);
    ws.cell(fila, 3).string(datoVendedor.apellido).style(contenidoEstilo);
    ws.cell(fila, 4).string(datoVendedor.contraseña).style(contenidoEstilo);
    
    fila = fila +1;
    });

    const rutaExcel = path.join(__dirname,'excel'+ nombreArchivo +'.xlsx');

    //escribir y guardar en el documento 
    //se le inclulle la ruta y una funcion 
    wb.write(rutaExcel, function(err,stars){

        //capturamos y mostramos en caso de un error
        if(err)console.log(err);
        //creamos una funcion que descargue el archibo y lo elimine 
        else{

            //guardamos el documento en la carpeta para excel para poder descargarla en el pc
                res.download(rutaExcel);
                
                console.log('documento descargado correctamente');

                //Eliminamos el documento de la carpeta excel
                fs.rm(rutaExcel, function(err){
                    if(err)console.log(err);
                    else console.log('Archivo descargado y borrado del servidor correctamente');
                });
                
        }
    });

    
}


//grafica
exports.graficaProductos= async(req , res)=>{
   // const nombre =await productosInventario.find({},{nombre:1,stock:1,_id:0});
    //console.table(nombre)
    
    //map() crea una nueva matriz con los resultados de llamar a una función para cada elemento de la matriz

   const nombres = (await productosInventario.find({},{nombre:1,_id:0})).map(item => item.nombre);
    console.table(nombres);
   const stocks = (await productosInventario.find({},{stock:1,_id:0})).map(item => item.stock);
    console.table(stocks);

    

    //res.render('grafica');

   res.render('grafica',{
        "nombres":nombres,
        "stocks":stocks
    });



  };
