// Creamos un array con objetos //
const Productos = [
    {
        nombre:"Producto1",
        peso:"1kg",
        precio:350
    },
    {
        nombre:"Producto2",
        peso:"5kg",
        precio:1500
    },
    {
        nombre:"Producto3",
        peso:"20kg",
        precio:5000
    },
    {
        nombre:"Producto4",
        peso:"25kg",
        precio:6000
    }
]

// carrito de compras // 
let carrito = {};

//funcion para agregar al carrito
const addCarrito = () => {
    let nombre = prompt("ingrese un nombre")
    let resultado = Productos.find((n) => n.nombre.toLowerCase() === nombre.toLowerCase());


    if (resultado) {
        carrito.push(resultado);
        console.log(carrito);
    } else {
        alert("El Producto no existe");
    }
};

// el usuario elige si desea o no comprar un producto // 
let elegir = prompt("Hola desa comprar algun producto? (si/no)");

while(elegir != "si" && elegir != "no"){
    alert("por favor elegir si o no")
    elegir = prompt("Hola desa comprar algun producto? (si/no)");
}
// si el usuario elige si se muestra los productos mapeados por alert // 
if (elegir == "si"){
    alert( " Estos productos tiene para elegir")
    let todosLosProductos = Productos.map( (producto) => producto.nombre + " " + producto.peso + " " + "$" +  producto.precio 
    );
    alert(todosLosProductos.join("-"))
    addCarrito();

// si el usuario elige no se lo despide // 

} else if (elegir == "no"){
    alert("Gracias por elegirnos");
}

