console.log("hj")

let divcont = document.getElementById("conta");
console.log(divcont)

let divcelda = document.createElement("div")
divcelda.className = "primero"
divcelda.textContent = "primero"
divcelda.id = "celda"

divcont.appendChild(divcelda)


let celda = document.getElementById("celda")

celda.addEventListener("mouseover", function() {
  // Cambiar el color de fondo cuando el mouse pasa sobre el div
  celda.style.backgroundColor = "#2ecc71";
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