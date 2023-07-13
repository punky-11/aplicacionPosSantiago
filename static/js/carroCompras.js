var carro = JSON.parse(localStorage.getItem("prodcutoCarro")) || []



function agregarCarro(nombre,precio,id) {

const repe= carro.some((repepro)=> repepro.id === id);

if(repe){
  carro.map((pordu)=>{
    if(pordu.id === id){
      pordu.cantidad++;

      localStorage.setItem("prodcutoCarro", JSON.stringify(carro));
      precioT()
    } 
  })
}else{
  carro.push({

    "id":id,
    "nombre":nombre,
    "precio":precio,
    "cantidad":1,

    
  });
  
  localStorage.setItem("prodcutoCarro",JSON.stringify(carro) );

}
contadorCarro()
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
      <p class="card-text">${miCarro.precio * miCarro.cantidad}</p>
      <p class="card-text">cantidad: ${miCarro.cantidad }</p>
      <button class="btn btn-danger" oncki>Eliminar</button>
    </div>
  </div>
</div>
</div>
`;
let eliminarP = document.createElement('button');
console.log(carro.length);
eliminarP.className = "bi bi-trash-fill";
contenidoCarro.appendChild(eliminarP);
eliminarP.addEventListener("click",eliminarProducto );

});

precioT()

  };



function contadorCarro() {
  const cantidad = document.getElementById('cantidad');
  
  cantidad.style.display="block"
  cantidad.innerText=carro.length;

}


//suma productos precio
function precioT() {
  const total = carro.reduce((acumulador, el) => acumulador + parseFloat(el.precio * el.cantidad), 0).toFixed(2);

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
  
  //actualizar();
}


//actualizar pagina 
function actualizar() {
  location.reload();
  return false;

}
  