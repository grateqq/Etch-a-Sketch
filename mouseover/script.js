// Seleccionar el elemento por su ID
let div = document.getElementById("miDiv");

// Agregar el evento mouseover
div.addEventListener("mouseover", function() {
    // Cambiar el color de fondo cuando el mouse pasa sobre el div
    div.style.backgroundColor = "#2ecc71";
});

// Agregar el evento mouseout
div.addEventListener("mouseout", function() {
    // Volver al color de fondo original cuando el mouse sale del div
    div.style.backgroundColor = "#3498db";
});