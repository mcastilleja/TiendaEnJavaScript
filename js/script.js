function showDate(){
  var date = new Date();
  var h = date.getHours(); 
  var m = date.getMinutes(); 
  var s = date.getSeconds();
  var d = date.getDate();
  var mnt = date.getMonth()+1;
  var y = date.getFullYear();
  var meridian = "AM";
  
  if(h == 0){
      h = 12;
  }
  
  if(h > 12){
      h = h - 12;
      meridian = "PM";
  }
  
  h = (h < 10) ? "0" + h : h;
  m = (m < 10) ? "0" + m : m;
  s = (s < 10) ? "0" + s : s;
  
  var dateFormat = d + "/" + mnt + "/" + y + " ";
  var time = h + ":" + m + ":" + s + " " + meridian;
  document.getElementById("date").innerHTML = dateFormat + time;
  
  setTimeout(showDate, 1000);
  
}

showDate();

function shopCart(n,e){
  var name = n;
  var p = e;
  var a = parseInt(prompt("Ingresa la cantidad a comprar:"));
  var cal = p * a;
  alert("Vea la consola para ver su Carrito de Compra");
  console.log("Carrito de Compra: \n\n Actualmente tiene " + a + " - " + "'" +name+ "'" + "\n y su total a pagar seria de: " + cal + ".00");
}