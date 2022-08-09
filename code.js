// Creamos un array con objetos //
let Productos = [
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
    }
]

// Agregamos un nuevo objeto al array //

Productos.push(   {
    nombre:"Producto4",
    peso:"25kg",
    precio:6000
})
// Mostramos una lista de precios en consola //
console.table(Productos);