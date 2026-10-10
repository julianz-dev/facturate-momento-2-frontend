# Facturate — Gestión de productos

Aplicación web desarrollada como parte de la actividad **Momento 2** del módulo de Frontend. El proyecto permite registrar productos, buscarlos por nombre o categoría y consultar la lista completa mediante una interfaz sencilla.

## Funcionalidades

- **Listado inicial:** muestra cinco productos de ejemplo al abrir la página.
- **Registro de productos:** permite ingresar el nombre, la categoría y el precio de un producto.
- **Validación de campos:** impide registrar productos si falta información.
- **Validación del precio:** acepta únicamente valores numéricos finitos mayores que cero.
- **Búsqueda:** filtra productos por coincidencias en el nombre o la categoría, sin distinguir entre mayúsculas y minúsculas.
- **Aviso de búsqueda vacía:** solicita al usuario escribir un término de búsqueda.
- **Aviso sin coincidencias:** informa cuando no se encuentran productos que coincidan con el término.
- **Mostrar todos los productos:** restaura la visualización de todos los productos del arreglo.
- **Actualización dinámica:** actualiza la lista en la página sin recargar el navegador.

> **Nota:** los productos agregados se guardan únicamente en el arreglo de JavaScript durante la sesión. Al recargar la página, se vuelve a cargar la lista inicial de cinco productos.

## Tecnologías utilizadas

- **HTML5:** estructura y contenido de la página.
- **CSS3:** estilos visuales y paleta de colores mediante variables CSS.
- **JavaScript:** manejo del arreglo de productos, validaciones, eventos y actualización del DOM.

El proyecto no requiere frameworks ni instalación de dependencias externas.

## Estructura del proyecto

```text
facturate-momento-2/
├── index.html
├── main.js
├── style.css
└── README.md
```

### Descripción de los archivos

| Archivo | Descripción |
|---|---|
| `index.html` | Define la estructura de la página, los campos, los botones y la lista de productos. |
| `main.js` | Contiene los productos iniciales y la lógica para mostrar, buscar y registrar productos. |
| `style.css` | Define la paleta de colores y los estilos de los elementos de la interfaz. |
| `README.md` | Documenta el propósito, las funcionalidades y el uso del proyecto. |

## Cómo ejecutar el proyecto

1. Descarga o clona el repositorio.
2. Abre la carpeta del proyecto.
3. Abre el archivo `index.html` en un navegador web.
4. Utiliza las secciones de registro y búsqueda.

No es necesario instalar herramientas adicionales para ejecutar la versión actual.

## Uso de la aplicación

### Registrar un producto

1. Escribe el nombre del producto.
2. Ingresa su categoría.
3. Introduce un precio mayor que cero.
4. Pulsa **Agregar producto**.

Si los campos están incompletos o el precio no es válido, la aplicación muestra un mensaje de advertencia.

### Buscar productos

1. Escribe un nombre o una categoría en el campo de búsqueda.
2. Pulsa **Buscar**.
3. La lista mostrará los productos que coincidan con el texto ingresado.

La búsqueda no distingue entre mayúsculas y minúsculas y permite coincidencias parciales.

### Mostrar todos los productos

Pulsa **Mostrar todos los productos** para volver a visualizar todos los elementos del arreglo, incluidos los que hayas agregado durante la sesión actual.

## Paleta de colores

La interfaz utiliza variables CSS declaradas en `:root`:

| Variable | Color | Código |
|---|---|---|
| `--azul-oscuro` | Azul oscuro | `#0b1f3a` |
| `--azul-claro` | Azul claro | `#5bc0eb` |
| `--verde` | Verde | `#37a169` |
| `--gris-oscuro` | Gris oscuro | `#1f2937` |
| `--gris-medio` | Gris medio | `#5b6472` |
| `--gris-claro` | Gris claro | `#dfe5ec` |
| `--gris-fondo` | Gris de fondo | `#f4f8fb` |
| `--blanco` | Blanco | `#ffffff` |

## Alcance y limitaciones

- Los datos se mantienen en memoria mientras la página está abierta; no se guardan en una base de datos ni en almacenamiento persistente.
- Los productos iniciales están definidos directamente en `main.js`.
- La aplicación está orientada a practicar conceptos básicos de HTML, CSS, JavaScript, arreglos de objetos, `push()`, `filter()`, eventos y manipulación del DOM.

## Autoría

Proyecto académico **Facturate — Gestión de productos**, elaborado como parte de la actividad Momento 2 de Frontend.
