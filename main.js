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
const listaProductos = document.querySelector("#listaProductos");

function mostrarProductos() {
    listaProductos.innerHTML = "";

    productos.forEach(function (producto) {
        const elemento = document.createElement("li");

        elemento.textContent =
            `${producto.nombre} - ${producto.categoria} - $${producto.precio.toLocaleString("es-CO")}`;

        listaProductos.appendChild(elemento);
    });
}

botonAgregar.addEventListener("click", function () {
    const nombre = campoNombre.value.trim();
    const categoria = campoCategoria.value.trim();
    const precio = Number(campoPrecio.value);

    if (nombre === "" || categoria === "" || campoPrecio.value === "") {
        alert("Por favor, completa todos los campos.");
        return;
    }

    if (!Number.isFinite(precio) || precio < 0) {
        alert("Ingresa un precio válido, igual o mayor que cero.");
        return;
    }

    const nuevoProducto = {
        nombre: nombre,
        categoria: categoria,
        precio: precio
    };

    productos.push(nuevoProducto);

    mostrarProductos();

    campoNombre.value = "";
    campoCategoria.value = "";
    campoPrecio.value = "";

    campoNombre.focus();
});

mostrarProductos();