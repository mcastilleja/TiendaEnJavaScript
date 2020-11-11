var arreglo = function(){
        var producto = document.getElementsByClassName("product");
        var costo = document.getElementsByClassName("cost");
        var cantidad = document.getElementsByClassName("neto");
            arrayProducto = [];
            arrayCosto = [];
            arrayCantidad = [];
            arrayMulti = [];
        for (var p = 0; p < producto.length; p++) {    
            arrayProducto[p] = producto[p].value;   
        }
        for (var c = 0; c < costo.length; c++) {    
            arrayCosto[c] = costo[c].value;    
        }  
        for (var n = 0; n < cantidad.length; n++) {    
            arrayCantidad[n] = cantidad[n].value;    
        } 
        for (var m = 0; m < costo.length; m++){
            arrayMulti[m] = arrayCosto[m] * arrayCantidad[m];
        }
        var suma = 0;
        for (var s = 0; s < arrayMulti.length; s++) {
            suma += arrayMulti[s];
        }
        console.log (arrayProducto); 
        console.log(arrayCosto);
        console.log(arrayCantidad);
        console.log(arrayMulti);
        console.log("Su total a pagar es de: $" + suma + ".00");
        alert("Su total a pagar es de: $" + suma + ".00");
        };