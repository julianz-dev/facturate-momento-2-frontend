# Facturate — Gestión de productos

Aplicación web desarrollada como parte de la actividad **Momento 2** del módulo de Frontend. Permite registrar productos, buscar coincidencias por nombre o categoría y consultar la lista completa mediante una interfaz web.

## Funcionalidades

- **Listado inicial:** muestra cinco productos de ejemplo al abrir la página.
- **Registro de productos:** permite ingresar el nombre, la categoría y el precio de un producto.
- **Validación de campos:** impide registrar productos si falta información.
- **Validación del precio:** acepta valores numéricos finitos mayores que cero.
- **Búsqueda dinámica:** filtra productos mientras el usuario escribe en el campo de búsqueda.
- **Búsqueda por nombre o categoría:** encuentra coincidencias parciales y no distingue entre mayúsculas y minúsculas.
- **Aviso de búsqueda vacía:** solicita un término cuando el campo queda vacío.
- **Aviso sin coincidencias:** informa cuando no se encuentran productos que coincidan con el texto ingresado.
- **Mostrar todos los productos:** permite volver a visualizar todos los productos del arreglo.
- **Actualización dinámica:** actualiza la lista en la página sin recargar el navegador.

> **Almacenamiento:** los productos agregados se guardan únicamente en el arreglo de JavaScript durante la sesión. Al recargar la página, vuelve a cargarse la lista inicial de cinco productos.

## Tecnologías utilizadas

- **HTML5:** estructura y contenido de la página.
- **CSS3:** estilos visuales y paleta de colores mediante variables CSS.
- **JavaScript:** manejo del arreglo de productos, validaciones, eventos, filtrado y actualización del DOM.

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
| `index.html` | Define la estructura de la página, los campos de registro y búsqueda, los botones y la lista de productos. |
| `main.js` | Contiene los productos iniciales y la lógica para mostrar, buscar y registrar productos. |
| `style.css` | Define la paleta de colores y los estilos de los elementos de la interfaz. |
| `README.md` | Documenta el propósito, las funcionalidades y el uso del proyecto. |

## Cómo ejecutar el proyecto

1. Clona o descarga el repositorio.
2. Abre la carpeta del proyecto en Visual Studio Code.
3. Abre `index.html` en un navegador web. También puedes usar la extensión Live Server.
4. Utiliza los campos de registro y búsqueda.

No es necesario instalar herramientas adicionales para ejecutar la versión actual.

## Uso de la aplicación

### Registrar un producto

1. Escribe el nombre del producto.
2. Ingresa su categoría.
3. Introduce un precio mayor que cero.
4. Pulsa **Agregar producto**.

Si los campos están incompletos o el precio no es válido, la aplicación muestra un mensaje de advertencia. Cuando el registro es válido, el producto se agrega al arreglo y la lista se actualiza.

### Buscar productos

1. Escribe un nombre o una categoría en el campo **Nombre o categoría**.
2. La lista se filtra automáticamente mientras escribes.
3. La búsqueda ignora diferencias entre mayúsculas y minúsculas y permite coincidencias parciales.
4. Si no hay coincidencias, la aplicación muestra una alerta.

**Nota técnica:** en el HTML también existe el botón **Buscar**, pero la versión actual de `main.js` escucha el evento `input` del campo de búsqueda y no registra un evento `click` para ese botón. Por tanto, la búsqueda se activa al escribir, no al pulsar **Buscar**. Esta interacción puede corregirse conectando el botón al procedimiento de filtrado o eliminando el botón si se desea conservar únicamente la búsqueda dinámica.

Si se borra todo el texto de búsqueda, la versión actual muestra una alerta y conserva la lista que estaba visible; para volver al listado completo se puede pulsar **Mostrar todos los productos**.

### Mostrar todos los productos

Pulsa **Mostrar todos los productos** para volver a visualizar todos los elementos del arreglo, incluidos los productos agregados durante la sesión actual.

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
- El botón **Buscar** está presente en el HTML, pero actualmente no tiene un evento `click` asociado en JavaScript.
- Las alertas de búsqueda se ejecutan desde el evento `input`; la experiencia podría mejorarse para evitar alertas repetidas mientras el usuario escribe.
- La aplicación está orientada a practicar conceptos básicos de HTML, CSS, JavaScript, arreglos de objetos, `push()`, `filter()`, eventos y manipulación del DOM.

## Autoría

Proyecto académico **Facturate — Gestión de productos**, elaborado como parte de la actividad Momento 2 de Frontend.
