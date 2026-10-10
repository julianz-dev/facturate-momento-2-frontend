//==========================================================//
//=============Facturate — Gestión de Productos=============//
//==========================================================//

const productos = [
    {
        nombre: "Mouse inalámbrico",
        categoria: "Periféricos",
        precio: 50000,
    },
    {
        nombre: "Teclado mecánico",
        categoria: "Periféricos",
        precio: 120000,
    },
    {
        nombre: "Monitor 24 pulgadas",
        categoria: "Pantallas",
        precio: 650000,
    },
    {
        nombre: "Audífonos con micrófono",
        categoria: "Audio",
        precio: 85000,
    },
    {
        nombre: "Webcam HD",
        categoria: "Periféricos",
        precio: 95000,
    },
];

// Selectores de los campos del formulario
const campoNombre = document.querySelector("#nombreProducto");
const campoCategoria = document.querySelector("#categoriaProducto");
const campoPrecio = document.querySelector("#precioProducto");

// Selectores de los elementos de búsqueda
const campoBuscar = document.querySelector("#buscarProducto");
const botonBuscar = document.querySelector("#btnBuscarProducto");

// Selectores de los botones de gestión
const botonAgregar = document.querySelector("#btnAgregarProducto");
const botonMostrarTodos = document.querySelector("#btnMostrarTodos");

// Selector de la lista de productos
const listaProductos = document.querySelector("#listaProductos");

//==========================================================//
//========Función para mostrar la lista de productos========//
//==========================================================//
const mostrarProductos = (lista) => {
    listaProductos.innerHTML = "";
    if (lista.length === 0) {
        const elemento = document.createElement("li");
        elemento.textContent = "No se encontraron productos que coincidan con la búsqueda.";
        listaProductos.appendChild(elemento);
        return;
    }
    lista.forEach((producto) => {
        const elemento = document.createElement("li");
        elemento.textContent =
            `${producto.nombre} - ${producto.categoria} - $${producto.precio.toLocaleString("es-CO")}`;
        listaProductos.appendChild(elemento);
    });
};

//==========================================================//
//==========Botón para accionar "Buscar producto"===========//
//==========================================================//
campoBuscar.addEventListener("input", () => {
    const textoBuscar = campoBuscar.value.trim().toLowerCase();
    if (textoBuscar === "") {
        mostrarProductos(productos);
        return;
    }
    const resultados = productos.filter((producto) => {
        return (
            producto.nombre.toLowerCase().includes(textoBuscar) ||
            producto.categoria.toLowerCase().includes(textoBuscar)
        );
    });
    mostrarProductos(resultados);
});

//==========================================================//
//======Botón para mostrar todos los productos==============//
//==========================================================//
botonMostrarTodos.addEventListener("click", () => {
    mostrarProductos(productos);
});

//==========================================================//
//=========Botón para accionar "Agregar producto"===========//
//==========================================================//
botonAgregar.addEventListener("click", () => {
    const nombre = campoNombre.value.trim();
    const categoria = campoCategoria.value.trim();
    const precio = Number(campoPrecio.value);
    if (nombre === "" || categoria === "" || campoPrecio.value === "") {
        alert("Por favor, completa todos los campos.");
        return;
    }
    if (!Number.isFinite(precio) || precio <= 0) {
        alert("Ingresa un precio válido, mayor que cero.");
        return;
    }
    const nuevoProducto = {
        nombre: nombre,
        categoria: categoria,
        precio: precio,
    }
    productos.push(nuevoProducto);
    mostrarProductos(productos);
    campoNombre.value = "";
    campoCategoria.value = "";
    campoPrecio.value = "";
    campoNombre.focus();
});

//==========================================================//
//===========Mostrar productos al cargar la página==========//
//==========================================================//
mostrarProductos(productos);