console.log("hj")

let divcont = document.getElementById("conta");
console.log(divcont)

for (let i= 1; i<=16; i++) {
  let divcelda = document.createElement("div")
  divcelda.className = "primero";
  divcelda.textContent= i
  console.log(divcelda)
  
  divcont.appendChild(divcelda)
}

