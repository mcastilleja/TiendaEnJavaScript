alert("Favor de ver la consola")
var productos = ["Huawei P40 Gris", 
                    "Huawei P30", 
                    "Huawei Y9 2019", 
                    "Huawei Mate 30 Pro", 
                    "Huawei P40 Esmeralda", 
                    "Huawei Watch Gt 2", 
                    "Huawei Band 4 Negro", 
                    "Huawei Band 4 Blanco", 
                    "Fitbit Tracker Charge 4",
                    "Fitbit Smartwatch Versa Lite", 
                    "Huawei Watch Fit", 
                    "Huawei Watch GT 2 Oro", 
                    "Garmin Vivoactive", 
                    "Jecoo Audífonos Bluetooth", 
                    "Jecoo Mini Audífonos Inalámbricos", 
                    "Duracell Capacidad 10050 mAh", 
                    "Duracell Capacidad 6700 mAh"];

var masProductos = ["Celular 2",
                    "Celular 3",
                    "Celular 4",
                    "PowerBank 2",
                    "PowerBank 3"];


console.log("\n\nActualmente en el arreglo existen " + productos.length + " productos");
listaProductos(productos.length, productos);

var final = productos.push("PowerBank 2020");
console.log("\n\nDespues del PUSH en el arreglo existen " + productos.length + " productos");
listaProductos(productos.length, productos);

var inicio = productos.unshift("Celular 2020");
console.log("\n\nDespues del UNSHIFT en el arreglo existen " + productos.length + " productos");
listaProductos(productos.length, productos);

var eliminarF = productos.pop();
console.log("\n\nDespues del POP en el arreglo existen " + productos.length + " productos y se elimino '" + eliminarF + "'");
listaProductos(productos.length, productos);

var eliminarI = productos.shift();
console.log("\n\nDespues del POP en el arreglo existen " + productos.length + " productos y se elimino '" + eliminarI + "'");
listaProductos(productos.length, productos);

var sortear = productos.sort();
console.log("\n\nSe han ordenado los productos con SORT");
listaProductos(productos.length, productos);

var sortear = productos.reverse();
console.log("\n\nSe ha invertido el orden con REVERSE");
listaProductos(productos.length, productos);

var copiaArray = productos.slice();
console.log("\n\nSe ha copiado el arreglo con SLICE");

var borrarElemento = copiaArray.splice(5)
console.log("\n\nSe ha eliminado elementos con SPLICE a copia de array");
listaProductos(copiaArray.length, copiaArray);

var arreglo = productos.concat(masProductos);
console.log("\n\n Se ha concatenado el Arreglo de productos y masProductos y este es el arreglo");
listaProductos(arreglo.length, arreglo);





function listaProductos(p, l){
    var lista = p;
    var name = l;
    console.log( "\nActualmente esta es la lista de productos:");
    for(i=0; i < lista; i++){
        console.log((i+1) + ".- " + name[i]);
    }
}