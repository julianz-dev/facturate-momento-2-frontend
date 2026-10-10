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

//==========================================================//
//=============Facturate — Gestión de Productos=============//
//==========================================================//

// Selectores de los campos del formulario
// Capturar los campos HTML para acceder a sus valores desde JavaScript.
// querySelector() busca el primer elemento que coincide con el selector CSS indicado.
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
  //innerHTML: Permite leer o modificar el contenido HTML interno de un elemento.
  listaProductos.innerHTML = "";

  lista.forEach((producto) => {
    // Crear un nuevo elemento HTML <li> en memoria.
    // Todavía no aparece en la página porque aún no se ha agregado al DOM.
    //document.createElement() Crea un elemento HTML nuevo.
    const elemento = document.createElement("li");

    // Asignar el texto que se mostrará dentro del elemento <li>.
    // ${...} permite insertar valores dentro de una plantilla literal.
    // toLocaleString("es-CO") da formato al número según la configuración regional colombiana.
    elemento.textContent = `${producto.nombre} - ${producto.categoria} - $${producto.precio.toLocaleString("es-CO")}`;

    // Insertar el elemento <li> dentro de la lista HTML.
    // appendChild() agrega el elemento como hijo de listaProductos.
    listaProductos.appendChild(elemento); //agregar elementos
  });
};

//==========================================================//
//==========Botón para accionar "Buscar producto"===========//
//==========================================================//

botonBuscar.addEventListener("click", () => {
  const textoBuscar = campoBuscar.value.trim().toLowerCase();

  if (textoBuscar === "") {
    alert("Por favor, escribe un nombre o una categoría para buscar.");
    return;
  }

  const resultados = productos.filter((producto) => {
    return (
      producto.nombre.toLowerCase().includes(textoBuscar) ||
      producto.categoria.toLowerCase().includes(textoBuscar)
    );
  });

  if (resultados.length === 0) {
    alert("No se encontraron productos que coincidan con la búsqueda.");
  }

  mostrarProductos(resultados);

  console.log(resultados);
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

  // Validar que todos los campos estén completos
  if (nombre === "" || categoria === "" || campoPrecio.value === "") {
    alert("Por favor, completa todos los campos.");
    return;
  }

  // Validar que el precio sea un número válido y positivo
  if (!Number.isFinite(precio) || precio <= 0) {
    alert("Ingresa un precio válido, mayor que cero.");
    return;
  }

  // Crear el objeto del nuevo producto
  const nuevoProducto = {
    nombre: nombre,
    categoria: categoria,
    precio: precio,
  };

  // Agregar el producto al arreglo
  // Agregar el objeto nuevo al arreglo de productos.
  // push() incorpora un elemento al final del arreglo.
  productos.push(nuevoProducto);

  // Actualizar la lista en pantalla
  mostrarProductos(productos);

  // Limpiar los campos del formulario después del registro.
  campoNombre.value = "";
  campoCategoria.value = "";
  campoPrecio.value = "";

  // Devolver el foco al campo del nombre
  campoNombre.focus();
});

//==========================================================//
//===========Mostrar productos al cargar la página==========//
//==========================================================//

mostrarProductos(productos);
