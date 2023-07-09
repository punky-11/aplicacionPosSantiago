var carro = JSON.parse(localStorage.getItem("prodcutoCarro")) || []



function agregarCarro(nombre,precio,id) {

  carro.push({

    "id":id,
    "nombre":nombre,
    "precio":precio

  });

  localStorage.setItem("prodcutoCarro",JSON.stringify(carro) );

}

function pintaCarro() {
  
carro.forEach(miCarro=>{


const contenidoCarro=document.getElementById('contenidoCarro') ;


contenidoCarro.innerHTML +=`
<div class="card mb-3" style="max-width: 540px;">
<div class="row g-0">
  <div class="col-md-4">
    <img src="https://source.unsplash.com/featured/300x201" class="img-fluid rounded-start" alt="...">
  </div>
  <div class="col-md-8">
    <div class="card-body">
      <h5 class="card-title">${miCarro.nombre}</h5>
      <p class="card-text">${miCarro.precio}</p>
      <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
      
    </div>
  </div>
</div>
</div>
`
let eliminarP=document.createElement('button');
  eliminarP.className="bi bi-trash-fill";
  productoEliminado.appendChild(eliminarP);
  eliminarP.addEventListener("click",eliminarProducto);
});

precioT()
  };


//suma productos precio
function precioT() {
  const total = carro.reduce((acumulador, el) => acumulador + parseFloat(el.precio), 0).toFixed(2);

const precioTotal = document.getElementById('precioTotal');
precioTotal.innerHTML = `<p>total: ${total}</p>`;
};


//eliminar produsto

/*function eliminarProducto(id) {
// Filtrar el carro para obtener todos los productos excepto el que tiene el ID especificado

carro = carro.filter(miCarro => miCarro.id === id);
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
let carro=carro.splice(carro,1)
localStorage.setItem("prodcutoCarro", JSON.stringify(carro));

//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift

pintaCarro();

precioT();
}*/

function eliminar(id){

  carro = carro.filter(miCarro => miCarro.id === id);

  
  localStorage.setItem("prodcutoCarro", JSON.stringify(carro));

  pintaCarro();
  precioT();
}


  
    



//set item
//guardamos en el storange

//get item
//optenemos lo que guardamos en el setItem

//setItem
//se usa json.stringify por que solo se puede mandar strin a el torange


//no mirar

/*function agregarCarro(nombre,precio) {

  let miCarro = storage.getItem(miCarro);

// Verificamos si tenemos algún valor auto guardado
// (esto solo ocurrirá si la página es recargada accidentalmente)
if (sessionStorage.getItem("autosave")) {
// Restaura el contenido al campo de texto
field.value = sessionStorage.getItem("autosave");
}

// Espera por cambios en el campo de texto
field.addEventListener("change", function() {
// Almacena el resultado en el objeto de almacenamiento de sesión
sessionStorage.setItem("autosave", field.value);
});
}*/