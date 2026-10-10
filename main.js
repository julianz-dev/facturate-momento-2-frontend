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

// Selectores del formulario de registro
const campoNombre = document.querySelector("#nombreProducto");
const campoCategoria = document.querySelector("#categoriaProducto");
const campoPrecio = document.querySelector("#precioProducto");

// Selectores de búsqueda
const campoBuscar = document.querySelector("#buscarProducto");
const botonBuscar = document.querySelector("#btnBuscarProducto");

// Selectores de los botones de gestión
const botonAgregar = document.querySelector("#btnAgregarProducto");
const botonMostrarTodos = document.querySelector("#btnMostrarTodos");

// Selectores de la lista de productos y su contador
const listaProductos = document.querySelector("#listaProductos");
const contadorProductos = document.querySelector("#contadorProductos");

// Selector de mensajes del formulario
const mensajeFormulario = document.querySelector("#mensajeFormulario");

//==========================================================//
//======Funciones para mensajes del formulario==============//
//==========================================================//
const mostrarMensajeFormulario = (mensaje, tipo) => {
    mensajeFormulario.textContent = mensaje;
    mensajeFormulario.className = tipo;
};

const limpiarMensajeFormulario = () => {
    mensajeFormulario.textContent = "";
    mensajeFormulario.className = "";
};

//==========================================================//
//========Función para mostrar la lista de productos========//
//==========================================================//
const mostrarProductos = (lista) => {
    listaProductos.innerHTML = "";

    contadorProductos.textContent =
        `Mostrando ${lista.length} de ${productos.length} productos`;

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
//=============Función para buscar productos================//
//==========================================================//
const filtrarProductos = () => {
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
};
// Eventos para ejecutar la búsqueda
campoBuscar.addEventListener("input", filtrarProductos);
botonBuscar.addEventListener("click", filtrarProductos);

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
        mostrarMensajeFormulario("Por favor, completa todos los campos.", "error");
        return;
    }

    if (!Number.isFinite(precio) || precio <= 0) {
        mostrarMensajeFormulario("Ingresa un precio válido, mayor que cero.", "error");
        return;
    }

    const nuevoProducto = {
        nombre: nombre,
        categoria: categoria,
        precio: precio,
    };

    productos.push(nuevoProducto);
    mostrarProductos(productos);
    mostrarMensajeFormulario("Producto agregado correctamente.", "exito");

    campoNombre.value = "";
    campoCategoria.value = "";
    campoPrecio.value = "";
    campoNombre.focus();
});

//==========================================================//
//===========Mostrar productos al cargar la página==========//
//==========================================================//
mostrarProductos(productos);