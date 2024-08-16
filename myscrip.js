console.log("hj")
// elebgimos un nodo y lo nombramos div nodo
let divcont = document.getElementById("conta");
console.log(divcont)
// creamos un elemento en la memoria
function inicio(numeroceldas) {
for (let i= 1; i<=numeroceldas; i++) {
let divcelda = document.createElement("div")
divcelda.className = "primero"
divcelda.textContent = i
divcelda.id = "celda" + i
divcelda.addEventListener("mouseover", function() {
  // Cambiar el color de fondo cuando el mouse pasa sobre el div
  divcelda.style.backgroundColor = "#2ecc71";
});
divcelda.addEventListener("mouseout", function() {
  // Volver al color de fondo original cuando el mouse sale del div
  divcelda.style.backgroundColor = "#3498db";
});
// Insertamos el elemento en DOM
divcont.appendChild(divcelda)
}
}

inicio(36)
/*
//DOM 
let celda = document.getElementById("celda")

/*
celda.addEventListener("mouseover", function() {
  // Cambiar el color de fondo cuando el mouse pasa sobre el div
  celda.style.backgroundColor = "#2ecc71";
});
celda.addEventListener("mouseout", function() {
  // Volver al color de fondo original cuando el mouse sale del div
  celda.style.backgroundColor = "#3498db";
});

// Agregar el evento mouseout

/*
for (let i= 1; i<=16; i++) {
  let divcelda = document.createElement("div")
  divcelda.className = "primero";
  divcelda.addEventListener("mouseover", function() {
    divcelda.style.backgroundColor = "#80eddb" ;
  })
  
  divcelda.textContent= i
  console.log(divcelda)
  
  divcont.appendChild(divcelda)
  
  
}
*/