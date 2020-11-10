alert("¡Bienvenidas mujeres emprendedoras!");
var x = confirm("¿Deseas saber acerca de autonomía económica de las mujeres?");

if (x == true){
    var name = prompt("Por favor ingresa tu nombre:");
  if (name != null) {
    document.getElementById("name").innerHTML = "Hola "  + name + " te invitamos a ser emprendedora y a desarrollar tu autonomía económica.";
  }
} else {
    window.location = "https://www.google.com.mx";
}