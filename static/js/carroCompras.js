var carro = JSON.parse(localStorage.getItem("prodcutoCarro")) || []

function agregarCarro(nombre,precio,id,stock) {

  carro.push({

    "id":id,
    "nombre":nombre,
    "precio":precio,
    "stock":stock,

    
  });
console.log(carro);
  localStorage.setItem("prodcutoCarro",JSON.stringify(carro) );

}
//pinta el carro
function pintaCarro() {
  
carro.forEach(miCarro=>{


const contenidoCarro=document.getElementById('contenidoCarro') ;


contenidoCarro.innerHTML +=`
<div class=" mb-3" >
<div class="row g-0">
  <div class="col-md-4">
    <img src="https://source.unsplash.com/featured/300x201" class="img-fluid rounded-start" alt="...">
  </div>
  <div class="col-md-8">
    <div class="card-body">
      <h5 class="card-title">${miCarro.nombre}</h5>
      <p class="card-text">${miCarro.precio}</p>
      <p class="card-text">cantidad: ${miCarro.stock}</p>
      
    </div>
  </div>
</div>
</div>
`;
let eliminarP = document.createElement('button');
eliminarP.className = "bi bi-trash-fill";
contenidoCarro.appendChild(eliminarP);
eliminarP.addEventListener("click",eliminarProducto );

});

precioT()

  };


//suma productos precio
function precioT() {
  const total = carro.reduce((acumulador, el) => acumulador + parseFloat(el.precio), 0).toFixed(2);

const precioTotal = document.getElementById('precioTotal');
precioTotal.innerHTML = `<p>total: ${total}</p>`;
};


//eliminar producto


const eliminarProducto = ()=> {
  const eliminar =carro.find((elementop )=> elementop.id );
  carro= carro.filter((carroid)=>{
    return carroid !== eliminar;
  })

  localStorage.setItem("prodcutoCarro", JSON.stringify(carro));
  
  actualizar();
}


//actualizar pagina 
function actualizar() {
  location.reload();
  return false;

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