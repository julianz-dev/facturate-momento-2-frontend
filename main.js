const productos = [
    {
        nombre: "Mouse inalámbrico",
        categoria: "Periféricos",
        precio: 50000
    },
    {
        nombre: "Teclado mecánico",
        categoria: "Periféricos",
        precio: 120000
    },
    {
        nombre: "Monitor 24 pulgadas",
        categoria: "Pantallas",
        precio: 650000
    },
    {
        nombre: "Audífonos con micrófono",
        categoria: "Audio",
        precio: 85000
    },
    {
        nombre: "Webcam HD",
        categoria: "Periféricos",
        precio: 95000
    }
];

const campoNombre = document.querySelector("#nombreProducto");
const campoCategoria = document.querySelector("#categoriaProducto");
const campoPrecio = document.querySelector("#precioProducto");

const botonAgregar = document.querySelector("#btnAgregarProducto");

botonAgregar.addEventListener("click", function () {
    console.log("Botón presionado");
});